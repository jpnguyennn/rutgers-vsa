import Image from "next/image";
import React from "react";
import { getUpcomingData } from "../prisma-functions";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function UpcomingArea() {
	// const upcomingData = await getUpcomingData();
	const data = {
		id: 1,
		season: "spring",
		event_name: "Train to Vietnam (in Real Life!)",
		event_date: new Date(2024, 3, 18, 9, 0, 0),
		location: "Busch Student Center - MPR",
		event_desc:
			"🚊💨𝖢𝖧𝖮𝖮𝖢𝖧𝖮𝖮彡🚊˚꩜.ᐟ.ᐟ" +
			"˚⊹👨🏻‍✈️🗯️Attention Passagers: This is the conductor speaking. You’re currently on the 𝐕𝐒𝐀-𝖳𝗋𝖺𝗂𝗇 𝗍𝗈 𝖵𝗂𝖾𝗍𝗇𝖺𝗆, and we are now approaching…𝐁𝐔𝐒𝐂𝐇 𝐌𝐏𝐑?!🏝️  🌈⭑ .ᐟ👅That’s right!! We’re bringing our cultural Train to Vietnam instagram posts to you —> IN PERSON?!‼️ChooChooWooHoo   𝖨𝖭𝖳𝖱𝖮𝖣𝖴𝖢𝖨𝖭𝖦: ˚⊹🚂𝐓𝐫𝐚𝐢𝐧 𝐓𝐨 𝐕𝐢𝐞𝐭𝐧𝐚𝐦🌾⭑   We’re sad to introduce to you, our 𝐋𝐀𝐒𝐓 𝐆𝐈𝐌 of the semester😢🙁. Come visit different Vietnamese Provinces📍, play cool games👾, and win prizes🏆!! We will be providing 🧁snacks and 🧃drinks for everyone!👯‍♂️   👋🏼Come hang with us one last time!😿😿",
		thumbnail:
			"https://res.cloudinary.com/rutgers-vsa/image/upload/v1719353339/kzr4cruognr8e0tmusly.jpg",
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
						<h2>{data.event_date.toDateString()} | 9:00 - 10:30 PM</h2>
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
