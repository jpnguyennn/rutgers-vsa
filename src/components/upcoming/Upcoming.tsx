"use client";

import "@/styles/upcoming.css";
import { useEffect, useState } from "react";
import UpcomingAdd from "./UpcomingAdd";
import UpcomingEventsDB from "./UpcomingEventsDB";
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

var firstEvent = Object.assign(new Event(), UpcomingEventsDB.at(0));
var otherEvents = UpcomingEventsDB.splice(1, UpcomingEventsDB.length - 1);

export const Upcoming = () => {
	const [mounted, setMounted] = useState<boolean | null>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<h1>NEXT UP</h1>
			<div className="overflow_manage">
				<UpcomingMain
					event={firstEvent.title}
					post={firstEvent.insta}
					date={firstEvent.date}
					pic={firstEvent.pic}
				/>
			</div>
			<h1>Future Events</h1>
			<div className="overflow_manage">
				<UpcomingAdd events={otherEvents} />
			</div>
		</div>
	);
};
