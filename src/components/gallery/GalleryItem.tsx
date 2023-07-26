import "@/styles/gallery.css";
import Link from "next/link";
import React from "react";

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
	console.log("event_name", event_name);

	return (
		<div>
			<div
				className="m-10 min-h-full sticky justify-center items-center align-center"
				id="gallery_item"
			>
				<Link href={drive} target="_blank" id="gallery_item">
					<div className="bg-white min-h-full p-8" id="gallery_portrait">
						<div className="sticky">
							<div className="block inline" id="event_picture_area">
								<img
									src={cover_picture}
									alt={event_name}
									className="absolute z-10"
									id="event_picture"
								/>
								<div
									className="absolute text-black relative z-20 top-4 left-4 bg-slate-600"
									id="event_date"
								>
									<p>date</p>
								</div>
							</div>
						</div>
						<div className="text-black" id="event_desc">
							<h2>{event_name}</h2>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default GalleryItem;
