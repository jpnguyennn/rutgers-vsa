import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const retrieveSemesters = async () => {
	try {
		const semesters = await prisma.galleryItem.findMany({
			select: {
				semester: true,
			},
			distinct: ["semester"],
		});

		const sortedSemesters = semesters
			.map((item) => item.semester)
			.sort((a, b) => {
				const [seasonA, yearA] = a.split(" ");
				const [seasonB, yearB] = b.split(" ");

				const yearNumA = parseInt(yearA);
				const yearNumB = parseInt(yearB);

				if (yearNumA !== yearNumB) {
					return yearNumB - yearNumA;
				}

				if (seasonA === "Fall" && seasonB === "Spring") {
					return -1;
				} else if (seasonA === "Spring" && seasonB === "Fall") {
					return 1;
				}

				return 0;
			});

		return NextResponse.json(sortedSemesters);
	} catch (error) {
		console.error("Error fetching semesters:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
};

export { retrieveSemesters as GET };
