import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const retrieveBoardPositions = async () => {
	try {
		const boardMembers = await prisma.boardMember.findMany();

		return NextResponse.json(boardMembers, { status: 200 });
	} catch (error) {
		console.error("Error retrieving board positions", error);

		return NextResponse.json(
			{ error: "Internal Server Error" },
			{
				status: 500,
			}
		);
	}
};

const createBoardPosition = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const {
			positional_id,
			position,
			vsa_email,
			full_name,
			photo_url,
			facebook,
			instagram,
			year,
			major,
			minor,
			why_vsa,
		} = body;

		const boardPosition = await prisma.boardMember.create({
			data: {
				positional_id,
				position,
				vsa_email,
				full_name,
				photo_url,
				facebook,
				instagram,
				year,
				major,
				minor,
				why_vsa,
			},
			select: {
				id: true,
			},
		});

		return NextResponse.json(
			{ message: "Position created successfully", boardPosition },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error creating board position: ", error);

		// Handle Prisma validation errors
		if (error instanceof Error) {
			return NextResponse.json(
				{
					error: "Board position with this information already exists",
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

const deleteBoardPosition = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Board Member ID was not passed" },
				{ status: 400 }
			);
		}

		const boardMember = await prisma.boardMember.delete({
			where: { id: id },
		});

		return NextResponse.json(
			{
				message: "Board Position deleted successfully",
				boardMember,
			},
			{
				status: 200,
			}
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

const updateBoardPosition = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const { id, ...updateData } = body;

		if (!id) {
			return NextResponse.json(
				{ error: "Board Member ID must be provided to update." },
				{ status: 400 }
			);
		}

		const boardMember = await prisma.boardMember.update({
			where: { id: id },
			data: updateData,
		});

		return NextResponse.json(
			{
				message: "Board Position updated successfully",
				boardMember: boardMember,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error("Error updating board member:", error);

		// Handle specific Prisma error for when a record to update is not found
		if (error.code === "P2025") {
			return NextResponse.json(
				{
					error: `Board member with ID '${error.meta?.cause?.id}' could not be found.`,
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
	deleteBoardPosition as DELETE,
	retrieveBoardPositions as GET,
	updateBoardPosition as PATCH,
	createBoardPosition as POST,
};
