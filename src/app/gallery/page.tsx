import React from "react";

import GalleryGrid from "../../components/gallery/GalleryGrid";

export default async function gallery() {
	return (
		<main>
			<div className="my-20 mx-auto text-center">
				<h1>Gallery</h1>
			</div>
			<GalleryGrid />
		</main>
	);
}
