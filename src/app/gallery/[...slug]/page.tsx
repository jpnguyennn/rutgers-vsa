import React from "react";

const GalleryYear = ({ params }: { params: { slug: string } }) => {
	console.log("params.slug", params.slug);

	return (
		<div>
			<h1 className="my-20 mx-auto justify-center text-center">
				Year {params.slug} Gallery
			</h1>
		</div>
	);
};

export default GalleryYear;
