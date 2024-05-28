"use server";

import prisma from "@/lib/prisma";

import { BoardMember, Intern, Prisma } from "@prisma/client";

/*
 * Functions that allow the retrieval of database entries of all of the defined models.
 */

export async function getBoardMemberData(): Promise<BoardMember[]> {
	const boardMembers = await prisma.boardMember.findMany();
	console.log("members: ", boardMembers);
	console.log("prisma in getData: ", prisma);

	return boardMembers;
}

export async function getInternData(): Promise<Intern[]> {
	const interns = await prisma.intern.findMany();
	console.log("members (interns): ", interns);
	console.log("prisma in getData: ", prisma);

	return interns;
}

/*
 * Functions that allow the creation of entries to the respective databases.
 */

export async function createBoardMember(
	data: Prisma.BoardMemberCreateInput
): Promise<Partial<BoardMember>> {
	console.log("prisma: ", prisma);
	console.log("data in createBoardMember: ", data);

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
