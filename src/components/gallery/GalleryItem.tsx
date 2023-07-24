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
	console.log("inside galleryItem");

	return (
		<div className="m-10 p-4 min-h-full sticky justify-center items-center">
			<Link href={drive} target="_blank">
				<div className="bg-white min-h-full p-8" id="gallery_portrait">
					<div className="absolute" id="event_picture_area">
						<img src={cover_picture} alt={event_name} id="event_picture" />
						<div className="text-black">
							<p>date</p>
						</div>
					</div>
					<div className="" id="event_desc">
						<h2>{event_name}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default GalleryItem;
