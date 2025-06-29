import { GalleryItem } from "@prisma/client";
import { columns } from "../../../app/admin/gallery/columns";

import { DataTable } from "../../../app/admin/gallery/data-table";

async function getEventData(): Promise<GalleryItem[]> {
	const events = await fetch("http://ruvsa.vercel.app/api/gallery", {
		next: { revalidate: 1 },
	});

	return events.json();
}

export default async function GalleryDatabase() {
	const data = await getEventData();

	return (
		<div>
			<h1>Edit Gallery Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
