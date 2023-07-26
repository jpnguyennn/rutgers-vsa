import "@/styles/gallery.css";
import React from "react";
import GalleryItem from "./GalleryItem";

async function getGalleryData() {
	const response = await fetch(
		"https://ruvsa-api.vercel.app/api/archived-events",
		{
			next: { revalidate: 1 },
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch Gallery data. Please reload");
	}

	return await response.json();
}

function GalleryItemGrid(galleryitems: any) {
	console.log("galleryitems", galleryitems.galleryitems);

	return (
		<div>
			{galleryitems.galleryitems.map((item) => (
				<GalleryItem
					key={item.event_id}
					event_name={item.event_name}
					date={item.date}
					insta={item.instagram_link}
					cover_picture={`https://res.cloudinary.com/rutgers-vsa/${item.cover_picture}`}
					drive={item.drive_link}
				/>
			))}
		</div>
	);
}

export default async function GalleryArea() {
	let gallery_data = JSON.parse(JSON.stringify(await getGalleryData()));

	console.log("gallery_data", gallery_data);

	return gallery_data.length == 0 ? (
		<div>
			<div className="my-20 mx-auto text-center">
				<h1>Gallery</h1>
			</div>
		</div>
	) : (
		<div>
			<div className="my-20 mx-auto text-center">
				<h1>Gallery</h1>
			</div>
			<div className="p-10 items-center grid" id="gallery">
				<GalleryItemGrid galleryitems={gallery_data} />
			</div>
		</div>
	);
}
