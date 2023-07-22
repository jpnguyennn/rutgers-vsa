import "@/styles/gallery.css";
import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryItemGrid = (galleryitems: any) => {
	return [galleryitems].map((item) => {
		<GalleryItem
			key={item.event_id}
			event_name={item.event_name}
			date={item.date}
			insta={item.instagram_link}
			cover_picture={`https://res.cloudinary.com/rutgers-vsa/${item.cover_picture}`}
			drive={item.drive_link}
		/>;
	});
};

const GalleryArea = (galleryitems: any) => {
	console.log("galleryitems", galleryitems);

	return galleryitems.length == 0 ? (
		<div>
			<div>
				<h1>Gallery</h1>
				<h1>It no work :(</h1>
			</div>
		</div>
	) : (
		<div>
			<div>
				<h1>Gallery</h1>
				<h1>Second</h1>
			</div>
			<div id="gallery">
				<GalleryItemGrid galleryitems={galleryitems} />
			</div>
		</div>
	);
};

export default GalleryArea;
