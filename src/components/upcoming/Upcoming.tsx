"use client";

import "@/styles/upcoming.css";
import { useEffect, useState } from "react";
import UpcomingAdd from "./UpcomingAdd";
import UpcomingMain from "./UpcomingMain";

class Event {
	event_id: number = -1;
	title: string = "";
	date: Date = new Date();
	insta: string = "";
	pic: string = "";

	getEventID() {
		return this.event_id;
	}
	getTitle() {
		return this.title;
	}
	getDate() {
		return this.date;
	}
	getInsta() {
		return this.insta;
	}
	getPic() {
		return this.pic;
	}
}

const Upcoming = ({ upcomingData }: { upcomingData: any }) => {
	var firstEvent = null;
	var otherEvents = null;

	const [mounted, setMounted] = useState<boolean | null>(false);
	if (upcomingData.length != 0) {
		firstEvent = Object.assign(new Event(), upcomingData.at(0));
		otherEvents = upcomingData.splice(1, upcomingData.length - 1);
	}
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<h1>NEXT UP</h1>
			<div className="overflow_manage">
				<UpcomingMain
					event={firstEvent.event_name}
					post={firstEvent.instagram_link}
					date={firstEvent.date}
					pic={firstEvent.event_picture}
				/>
			</div>
			<h1>Future Events</h1>
			<div className="overflow_manage">
				<UpcomingAdd events={otherEvents} />
			</div>
		</div>
	);
};

export default Upcoming;
