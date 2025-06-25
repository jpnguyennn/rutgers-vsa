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

export { retrieveInterns as GET, deleteIntern as DELETE };
