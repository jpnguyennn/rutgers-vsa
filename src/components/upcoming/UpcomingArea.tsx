import Image from "next/image";
import React from "react";
import { getUpcomingData } from "../prisma-functions";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function UpcomingArea() {
	// const upcomingData = await getUpcomingData();
	const data = {
		id: 1,
		season: "fall",
		event_name: "Chips and Challenges",
		event_date: new Date(2024, 11, 21, 9, 0, 0),
		location: "Busch Student Center - MPR",
		event_desc:
			"Feeling a little 𝓁𝓊𝒸𝓀𝓎? 🍀 . ݁₊ ⊹ . ݁˖ . ݁༉‧₊˚. . ݁₊ ⊹ . ݁˖ . ݁༉‧₊˚. . ݁₊ ⊹ . ݁˖ . ݁༉‧₊˚. . ݁₊ ⊹ . ݁˖ . ݁༉‧₊˚.➽ 𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐢𝐧𝐠 : 𝑪𝒉𝒊𝒑𝒔 & 𝑪𝒉𝒂𝒍𝒍𝒆𝒏𝒈𝒆𝒔 Get ready for an 𝙪𝙣𝙛𝙤𝙧𝙜𝙚𝙩𝙩𝙖𝙗𝙡𝙚 night filled with games and plenty of prizes presented by Rutgers VSA & RCC & ASC. Whether you’re here to win 𝐛𝐢𝐠 or just enjoy the 𝚟𝚒𝚋𝚎𝚜, we’ve got something for everyone. Bring your friends, bring your luck, and let’s make it a night to remember!",
		thumbnail:
			"https://res.cloudinary.com/rutgers-vsa/image/upload/v1732508681/rcc_x_vsa_8_kuvqfh.png",
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
