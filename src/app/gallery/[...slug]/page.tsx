import React from "react";

const GalleryYear = ({ params }: { params: { slug: string } }) => {
	console.log("params.slug", params.slug);

	return (
		<div>
			<h1>HIIII: {params.slug}</h1>
		</div>
	);
};

export default GalleryYear;
