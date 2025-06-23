import React from "react";

const GalleryYear = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params;
    console.log("params.slug", params.slug);

    return (
		<div>
			<h1>HIIII: {params.slug}</h1>
		</div>
	);
};

export default GalleryYear;
