import prisma from "@/lib/prisma";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
	try {
		const users = await prisma.boardMember.findMany();

		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to get board members" },
			{
				status: 500,
			}
		);
	}
}
