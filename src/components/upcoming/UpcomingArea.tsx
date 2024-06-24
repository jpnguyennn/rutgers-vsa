import Image from "next/image";
import React from "react";
import { getUpcomingData } from "../prisma-functions";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function UpcomingArea() {
	// const upcomingData = await getUpcomingData();
	const data = {
		id: 1,
		season: "spring",
		event_name: "PLACEHOLDER NAME",
		event_date: new Date(),
		location: "Busch MPR",
		event_desc: "Temporary Description",
		thumbnail:
			"https://res.cloudinary.com/rutgers-vsa/image/upload/v1697592258/iys3jmdqgzzjx1ngceyf.jpg",
	};

	return data.season == "spring" || data.season == "fall" ? (
		<div className="grid justify-center mx-20">
			<div className="block">
				<div className="flex">
					<div className="min-w-[300px]">
						<AspectRatio ratio={1} className="">
							<Image
								src={data.thumbnail}
								fill={true}
								alt={data.event_name}
								className=""
							/>
						</AspectRatio>
					</div>
					<div className="ml-20 flex-col text-left">
						<h1>{data.event_name}</h1>
						<h2>{data.event_date.toDateString()} | 9:00 - 10:30 PM</h2>
						<p>{data.event_desc}</p>
					</div>
				</div>
			</div>
		</div>
	) : data.season == "winter" ? (
		<div>output for winter break</div>
	) : (
		<div>output for summer break</div>
	);
}
