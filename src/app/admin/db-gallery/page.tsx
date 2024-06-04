import { GalleryItem } from "@prisma/client";
import { columns } from "./columns";

import { DataTable } from "./data-table";

async function getEventData(): Promise<GalleryItem[]> {
	// const events = await fetch("http://ruvsa.vercel.app/api/gallery", {
	// 	next: {revalidate: 1},
	// })

	// return events.json();
	return [
		{
			id: 1,
			event_name: "test",
			event_date: new Date(),
			location: "Busch MPR",
			event_desc: "testing entry",
			thumbnail: "/image/testing",
			semester: "Fall 2050",
		},
	];
}

export default async function GalleryDatabase() {
	const data = await getEventData();

	return (
		<div>
			<h1>Edit Interns Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
