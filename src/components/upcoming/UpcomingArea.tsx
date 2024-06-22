import Image from "next/image";
import React from "react";
import { getUpcomingData } from "../prisma-functions";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function UpcomingArea() {
	// const upcomingData = await getUpcomingData();
	const data = {
		id: 1,
		event_name: "PLACEHOLDER NAME",
		event_date: new Date(),
		location: "Busch MPR",
		event_desc: "Temporary Description",
		thumbnail:
			"https://res.cloudinary.com/rutgers-vsa/image/upload/v1697592258/iys3jmdqgzzjx1ngceyf.jpg",
	};

	return (
		<div className="flex mx-20">
			<div className="relative min-w-min">
				<AspectRatio ratio={1} asChild={true}>
					<Image
						src={data.thumbnail}
						fill={true}
						alt={data.event_name}
						className="z-10 w-full h-full"
					/>
				</AspectRatio>
			</div>
			<div className="flex-col">
				<h1>{data.event_name}</h1>
				<h2>{data.event_date.toDateString()} | 9:00 - 10:30 PM</h2>
			</div>
		</div>
	);
}
