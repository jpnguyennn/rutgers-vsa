import "@/styles/gallery.css";
import dynamic from "next/dynamic";
import React from "react";

const GalleryItem = dynamic(() => import("./GalleryItem"), { ssr: false });

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

export default async function GalleryArea() {
	// let gallery_data = JSON.parse(JSON.stringify(await getGalleryData()));
	// gallery_data.reverse();

	// return gallery_data.length == 0 ? (
	// 	<div>
	// 		<div className="my-20 mx-auto text-center">
	// 			<h1>Gallery</h1>
	// 		</div>
	// 	</div>
	// ) : (
	// 	<div>
	// 		<div className="my-20 mx-auto text-center">
	// 			<h1>Gallery</h1>
	// 		</div>
	// 		<div className="p-10 items-center grid" id="gallery">
	// 			{gallery_data.map((item) => (
	// 				<GalleryItem
	// 					key={item.event_id}
	// 					event_name={item.event_name}
	// 					date={item.date}
	// 					insta={item.instagram_link}
	// 					cover_picture={`https://res.cloudinary.com/rutgers-vsa/${item.cover_picture}`}
	// 					drive={item.drive_link}
	// 				/>
	// 			))}
	// 		</div>
	// 	</div>
	// );

	return (
		<div>
			<div className="my-20 mx-auto text-center">
				<h1>Gallery</h1>
			</div>
		</div>
	);
}
