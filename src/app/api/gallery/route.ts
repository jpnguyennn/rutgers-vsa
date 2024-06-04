import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
	try {
		const neon = new Pool({
			connectionString: process.env.POSTGRES_PRISMA_URL,
		});
		const adapter = new PrismaNeon(neon);
		const prisma = new PrismaClient({ adapter });

		const users = await prisma.galleryItem.findMany();

		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to get gallery items" },
			{
				status: 500,
			}
		);
	}
}
