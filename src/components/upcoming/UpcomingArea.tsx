import React from "react";
import Upcoming from "./Upcoming";

async function getUpcomingData() {
	const response = await fetch("https://ruvsa-api.vercel.app/api/events", {
		next: { revalidate: 1 },
	});
	return response.json();
}

export default async function UpcomingArea() {
	const upcomingData = await getUpcomingData();

	console.log("upcomingData 1 = ", upcomingData);

	return (
		<>
			<Upcoming upcomingData={upcomingData} />
		</>
	);
}
