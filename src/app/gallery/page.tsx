import GalleryArea from "@/components/gallery/GalleryArea";
import React from "react";

async function getGalleryData() {
	const response = await fetch(
		"https://ruvsa-api-git-preview-fyrezzz.vercel.app/api/archived-events",
		{
			next: { revalidate: 3600 },
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch Gallery data. Please reload");
	}

	return await response.json();
}

export default async function Gallery() {
	let gallery_data = await getGalleryData();

	gallery_data = gallery_data.slice(0);

	console.log(
		"gallery_data",
		gallery_data,
		"\n typeof gallery_data",
		typeof [gallery_data]
	);

	return (
		<div>
			<div id="gallery_area">
				<GalleryArea gallery_items={gallery_data} />
			</div>
		</div>
	);
}
