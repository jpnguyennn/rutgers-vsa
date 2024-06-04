"use server";

import prisma from "@/lib/prisma";

import { BoardMember, GalleryItem, Intern, Prisma } from "@prisma/client";

/*
 * Functions that allow the retrieval of database entries of all of the defined models.
 */

export async function getBoardMemberData(): Promise<BoardMember[]> {
	const boardMembers = await fetch("http://ruvsa.vercel.app/api/board", {
		next: { revalidate: 10 },
	});

	return boardMembers.json();
}

export async function getInternData(): Promise<Intern[]> {
	const interns = await fetch("http://ruvsa.vercel.app/api/board", {
		next: { revalidate: 10 },
	});

	return interns.json();
}

// export async function getEventData(): Promise<GalleryItem[]> {
// 	// const interns = await fetch("http://ruvsa.vercel.app/api/board", {
// 	// 	next: { revalidate: 10 },
// 	// });

// 	// return interns.json();
// }

/*
 * Functions that allow the creation of entries to the respective databases.
 */

export async function createBoardMember(
	data: Prisma.BoardMemberCreateInput
): Promise<Partial<BoardMember>> {
	return await prisma.boardMember.create({ data });
}

export async function createIntern(
	data: Prisma.InternCreateInput
): Promise<Partial<Intern>> {
	return await prisma.intern.create({ data });
}

export async function createEvent(
	data: Prisma.GalleryItemCreateInput
): Promise<Partial<GalleryItem>> {
	return await prisma.galleryItem.create({ data });
}

/*
 * Functions that allow the deletion of entries to the respective databases.
 */

export async function deleteBoardMember(member_id) {
	const deletedBoardMember = await prisma.boardMember.delete({
		where: { id: member_id },
	});
}

export async function deleteIntern(member_id) {
	const deletedIntern = await prisma.intern.delete({
		where: { id: member_id },
	});
}

export async function deleteEvent(event_id) {
	const deletedEvent = await prisma.galleryItem.delete({
		where: { id: event_id },
	});
}
