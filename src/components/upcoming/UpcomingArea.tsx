import Image from "next/image";
import React from "react";
import { getUpcomingData } from "../prisma-functions";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function UpcomingArea() {
	// const upcomingData = await getUpcomingData();
	const data = {
		id: 1,
		season: "fall",
		event_name: "Voyage to VSA",
		event_date: new Date(2024, 9, 5, 9, 0, 0),
		location: "Busch Student Center - MPR",
		event_desc:
			"𝑨𝒉𝒐𝒚, friends! 🚢 ࿐ ࿔*:･ﾟ Get ready to set sail on our Voyage to VSA! 🌟 Join us for our first event back as we kick off an exciting new chapter. It’s going to be a fun day of reconnecting, adventure, and making memories ᡣ𐭩 Don’t miss out! Let’s set sail together! ࿔:･ﾟ (Heard you could win a sonny angel or jbl speaker 🫢)Everyone is welcome to our event! Hope to see you there (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ",
		thumbnail:
			"https://res.cloudinary.com/rutgers-vsa/image/upload/v1725423286/m5qbtcawpevvhutwqvkp.jpg",
	};

	return data.season == "spring" || data.season == "fall" ? (
		<div className="grid justify-center mx-16 lg:mx-32">
			<div className="block">
				<div className="lg:flex">
					<div className="lg:min-w-[300px]">
						<AspectRatio ratio={1} className="">
							<Image
								src={data.thumbnail}
								fill={true}
								alt={data.event_name}
								className=""
							/>
						</AspectRatio>
					</div>
					<div className="lg:ml-20 flex-col text-center lg:text-left">
						<h1>{data.event_name}</h1>
						<h2>
							{data.event_date.toDateString()} | 9:00 - 10:30 PM
						</h2>
						<p className="mt-10">{data.event_desc}</p>
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
