"use client";

import "@/styles/gallery.css";
import Link from "next/link";
import React, { useState } from "react";

const GalleryItem = ({
	key,
	event_name,
	date,
	insta,
	cover_picture,
	drive,
}: {
	key: number;
	event_name: string;
	date: Date;
	insta: string;
	cover_picture: string;
	drive: string;
}) => {
	const dateOfEvent = new Date(date);

	return (
		<div>
			<div
				className="m-10 min-h-full sticky justify-center items-center align-center"
				id="gallery_item"
			>
				<Link href={drive} target="_blank" id="gallery_item">
					<div className="bg-white min-h-full p-8" id="gallery_portrait">
						<div className="sticky">
							<div className="relative" id="event_picture_area">
								<img
									src={cover_picture}
									alt={event_name}
									className="z-10"
									id="event_picture"
									height={55}
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
							className="text-black text-center pt-4 text-4xl"
							id="event_desc"
						>
							<p>{event_name}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default GalleryItem;
