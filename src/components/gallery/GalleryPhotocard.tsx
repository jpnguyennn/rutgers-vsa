"use client";

import "@/styles/gallery.css";
import Image from "next/image";
import React from "react";

const GalleryPhotocard = ({
	event_name,
	date,
	cover_picture,
}: {
	event_name: string;
	date: Date;
	cover_picture: string;
}) => {
	const dateOfEvent = new Date(date);

	return (
		<div
			className="m-10 sticky justify-center items-center align-center"
			id="gallery_item"
		>
			<div className="bg-white p-8 max-w-2xl" id="gallery_portrait">
				<div className="sticky">
					<div className="relative" id="event_picture_area">
						<Image
							src={`https://res.cloudinary.com/rutgers-vsa/${cover_picture}`}
							alt={event_name}
							width={300}
							height={300}
							className="z-10"
						/>
						<div
							className={`p-2 absolute text-black z-20 top-4 left-4 bg-[rgba(155,214,209,0.75)]`}
							id="event_date"
						>
							<p>{dateOfEvent.toDateString()}</p>
						</div>
					</div>
				</div>
				<div
					className="text-black text-center pt-4 text-4xl max-w-2xl"
					id="event_desc"
				>
					<p className="whitespace-normal">{event_name}</p>
				</div>
			</div>
		</div>
	);
};

export default GalleryPhotocard;
