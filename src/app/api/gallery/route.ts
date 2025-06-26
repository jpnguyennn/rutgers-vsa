import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const retrieveEvents = async () => {
	try {
		const users = await prisma.galleryItem.findMany();

		return NextResponse.json(users, { status: 200 });
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
		const body = await request.json();
		const {
			event_name,
			event_date,
			event_desc,
			thumbnail,
			semester,
			location,
		} = body;

		const event = await prisma.galleryItem.create({
			data: {
				event_name,
				event_date,
				event_desc,
				thumbnail,
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
