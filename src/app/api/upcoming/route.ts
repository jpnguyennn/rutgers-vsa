import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
	try {
		const users = await prisma.upcomingEvent.findMany();

		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to get the upcoming event" },
			{
				status: 500,
			}
		);
	}
}
