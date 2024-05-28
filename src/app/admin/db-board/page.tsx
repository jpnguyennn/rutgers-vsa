import { columns } from "./columns";
import { DataTable } from "./data-table";

import { getBoardMemberData } from "@/components/prisma-functions";

export default async function BoardDatabase() {
	const data = await getBoardMemberData();

	return (
		<div>
			<h1>Edit Board Members Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
