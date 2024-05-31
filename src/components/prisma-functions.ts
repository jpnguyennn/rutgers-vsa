"use server";

import prisma from "@/lib/prisma";

import { BoardMember, Intern, Prisma } from "@prisma/client";

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
	const interns = await prisma.intern.findMany();

	return interns;
}

/*
 * Functions that allow the creation of entries to the respective databases.
 */

export async function createBoardMember(
	data: Prisma.BoardMemberCreateInput
): Promise<Partial<BoardMember>> {
	return await prisma.boardMember.create({ data });
}

/*
 * Functions that allow the deletion of entries to the respective databases.
 */

export async function deleteBoardMember(member_id) {
	const deletedBoardMember = await prisma.boardMember.delete({
		where: { id: member_id },
	});

	console.log(deleteBoardMember);
}
