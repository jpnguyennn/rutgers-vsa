"use client";

import "@/styles/gallery.css";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const GalleryPhotocard = ({
	event_name,
	date,
	cover_picture,
	rotation,
}: {
	event_name: string;
	date: Date;
	cover_picture: string;
	rotation: number;
}) => {
	const dateOfEvent = new Date(date);

	return (
		<div
			style={{ transform: `rotate(${rotation}deg)` }}
			className="m-10 min-h-full sticky justify-center items-center align-center"
			id="gallery_item"
		>
			<div className="bg-white min-h-full p-8" id="gallery_portrait">
				<div className="sticky">
					<div className="relative" id="event_picture_area">
						<AspectRatio ratio={1}>
							<Image
								src={`https://res.cloudinary.com/rutgers-vsa/${cover_picture}`}
								alt={event_name}
								className="z-10"
								fill={true}
							/>
						</AspectRatio>
						<div
							className={`p-2 absolute text-black z-20 top-4 left-4 bg-[rgba(155,214,209,0.75)]`}
							id="event_date"
						>
							<p>{dateOfEvent.toDateString()}</p>
						</div>
					</div>
				</div>
				<div className="text-black text-center pt-4 text-4xl" id="event_desc">
					<p>{event_name}</p>
				</div>
			</div>
		</div>
	);
};

export default GalleryPhotocard;
