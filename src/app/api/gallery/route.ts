import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

interface CloudinaryUploadResult {
	secure_url: string;
	public_id: string;
}

const retrieveEvents = async (request: NextRequest) => {
	try {
		const { searchParams } = new URL(request.url);
		const semester = searchParams.get("semester");

		const whereClause = semester ? { semester } : {};

		const gallery = await prisma.galleryItem.findMany({
			where: whereClause,
		});

		return NextResponse.json(gallery, { status: 200 });
	} catch (error) {
		console.error("Error retrieving events: ", error);

		return NextResponse.json(
			{ error: "Failed to get gallery items" },
			{
				status: 500,
			}
		);
	}
};

const createEvent = async (request: NextRequest) => {
	try {
		const formData = await request.formData();

		// Extract form fields
		const event_name = formData.get("event_name") as string;
		const event_date = formData.get("event_date") as string;
		const event_desc = formData.get("event_desc") as string;
		const semester = formData.get("semester") as string;
		const location = formData.get("location") as string;
		const thumbnailFile = formData.get("thumbnail") as File | null;

		let thumbnailURL = "";
		let thumbnailPublicURL = "";

		// Upload thumbnail to Cloudinary if provided
		if (thumbnailFile && thumbnailFile.size > 0) {
			// Validate file type
			if (!thumbnailFile.type.startsWith("image/")) {
				return NextResponse.json(
					{ error: "Thumbnail must be an image file" },
					{ status: 400 }
				);
			}

			// Validate file size (5MB limit)
			if (thumbnailFile.size > 5 * 1024 * 1024) {
				return NextResponse.json(
					{ error: "Thumbnail file size must be less than 5MB" },
					{ status: 400 }
				);
			}

			try {
				// Convert file to buffer
				const bytes = await thumbnailFile.arrayBuffer();
				const buffer = Buffer.from(bytes);

				// Upload to Cloudinary
				const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
					cloudinary.uploader
						.upload_stream(
							{
								folder: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/event-thumbnails`,
								public_id: `event-${Date.now()}-${event_name
									.replace(/[^a-zA-Z0-9]/g, "-")
									.toLowerCase()}`,
								transformation: [
									{ width: 1000, height: 1000, crop: "fill" },
									{ quality: "auto" },
									{ format: "auto" },
								],
								resource_type: "image",
							},
							(error, result) => {
								if (error) reject(error);
								else resolve(result);
							}
						)
						.end(buffer);
				});

				thumbnailURL = uploadResult.secure_url;
				thumbnailPublicURL = uploadResult.public_id;
			} catch (uploadError) {
				console.error("Cloudinary upload error:", uploadError);
				return NextResponse.json(
					{ error: "Failed to upload thumbnail image" },
					{ status: 500 }
				);
			}
		}

		const event = await prisma.galleryItem.create({
			data: {
				event_name,
				event_date,
				event_desc,
				thumbnailURL,
				thumbnailPublicURL,
				semester,
				location,
			},
			select: { id: true },
		});

		return NextResponse.json(
			{ message: "Event created successfully", event },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error creating event: ", error);

		// Handle Prisma validation errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: "Event with this information already exists",
				},
				{ status: 409 }
			);
		} else {
			return NextResponse.json(
				{ error: "Internal server error" },
				{ status: 500 }
			);
		}
	}
};

const deleteEvent = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Event ID was not passed" },
				{ status: 400 }
			);
		}

		// First, get the event to retrieve thumbnail info before deletion
		const existingEvent = await prisma.galleryItem.findUnique({
			where: { id: id },
			select: {
				id: true,
				event_name: true,
				thumbnailURL: true,
				thumbnailPublicURL: true,
			},
		});

		if (!existingEvent) {
			return NextResponse.json(
				{ error: `Event with ID ${id} could not be found.` },
				{ status: 404 }
			);
		}

		// Delete thumbnail from Cloudinary if it exists
		let cloudinaryDeleted = false;
		if (existingEvent.thumbnailPublicURL) {
			try {
				const result = await cloudinary.uploader.destroy(
					existingEvent.thumbnailPublicURL
				);
				cloudinaryDeleted = result.result === "ok";

				if (!cloudinaryDeleted) {
					console.warn(
						`Failed to delete image from Cloudinary: ${existingEvent.thumbnailPublicURL}`
					);
					// Continue with database deletion even if Cloudinary deletion fails
				}
			} catch (cloudinaryError) {
				console.error("Cloudinary deletion error:", cloudinaryError);
				// Continue with database deletion even if Cloudinary deletion fails
			}
		}

		const event = await prisma.galleryItem.delete({
			where: { id: id },
		});

		return NextResponse.json(
			{ message: "Event deleted successfully", event },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error deleting position:", error);

		// Handle Prisma validation errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: `Board member with ID ${error.meta.id} could not be found.`,
				},
				{ status: 404 } // Not Found
			);
		}

		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
};

const updateEvent = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id, ...updateData } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Event ID must be provided to update" },
				{ status: 400 }
			);
		}

		const event = await prisma.galleryItem.update({
			where: { id: id },
			data: updateData,
		});

		return NextResponse.json(
			{ message: "Event updated successfully", event },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error updating event:", error);

		// Handle specific Prisma error for when a record to update is not found
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: `Event with ID '${error.meta?.cause?.id}' could not be found.`,
				},
				{ status: 404 } // Not Found
			);
		}

		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
};

export {
	deleteEvent as DELETE,
	retrieveEvents as GET,
	updateEvent as PATCH,
	createEvent as POST,
};
