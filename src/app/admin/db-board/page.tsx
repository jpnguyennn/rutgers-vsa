import prisma from "@/lib/prisma";
import { BoardMember, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<BoardMember[]> {
	const boardMembers = await prisma.boardMember.findMany();
	console.log("members: ", boardMembers);

	return boardMembers;
}

export default async function BoardDatabase() {
	const data = await getData();

	return (
		<div>
			<h1>Edit Board Members Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
