import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const retrieveInterns = async () => {
	try {
		const interns = await prisma.intern.findMany();

		return NextResponse.json(interns, { status: 200 });
	} catch (error) {
		console.error("Error retrieving interns: ", error);

		return NextResponse.json(
			{ error: "Failed to get interns" },
			{
				status: 500,
			}
		);
	}
};

const createIntern = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const {
			full_name,
			instagram,
			facebook,
			photo_url,
			year,
			major,
			minor,
		} = body;

		const intern = await prisma.intern.create({
			data: {
				full_name,
				instagram,
				facebook,
				photo_url,
				year,
				major,
				minor,
			},
			select: {
				id: true,
			},
		});

		return NextResponse.json(
			{ message: "Intern created successfully", intern },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error creating board position: ", error);

		// Handle Prisma validation errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: "Intern with this information already exists",
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

const deleteIntern = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Intern ID was not passed" },
				{ status: 400 }
			);
		}

		const intern = await prisma.intern.delete({ where: { id: id } });

		return NextResponse.json(
			{ message: "Intern deleted successfully", intern },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error deleting intern:", error);

		// Handle Prisma validation errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: `Intern with ID ${error.meta.id} could not be found.`,
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

const updateIntern = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id, ...updateData } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Intern ID must be provided to update." },
				{ status: 400 }
			);
		}

		const intern = await prisma.intern.update({
			where: { id: id },
			data: updateData,
		});

		return NextResponse.json(
			{ message: "Intern created successfully", intern },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error updating intern:", error);

		// Handle specific Prisma error for when a record to update is not found
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: `Intern with ID '${error.meta?.cause?.id}' could not be found.`,
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
	deleteIntern as DELETE,
	retrieveInterns as GET,
	updateIntern as PATCH,
	createIntern as POST,
};
