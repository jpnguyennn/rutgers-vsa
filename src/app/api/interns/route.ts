import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
	try {
		const users = await prisma.intern.findMany();

		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to get interns" },
			{
				status: 500,
			}
		);
	}
}
