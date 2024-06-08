import React from "react";

import GalleryTable from "./gallery-table";

import { GalleryItem } from "@prisma/client";

async function getGalleryData(): Promise<GalleryItem[]> {
	const items = await fetch(process.env.RUVSA_API_GALLERY, {
		next: { revalidate: 1 },
	});

	return items.json();
}

export default async function gallery() {
	const new_full_data = await getGalleryData();

	return (
		<main>
			<div className="my-20 mx-auto text-center">
				<h1>Gallery</h1>
			</div>
			<GalleryTable full_data={new_full_data} />
		</main>
	);
}
