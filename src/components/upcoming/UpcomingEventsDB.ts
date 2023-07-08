const InitialUpcomingEventsDB = [
	{
		id: 0,
		title: "VSA External Elections 2nd Day",
		date: new Date(2023, 3, 30, 22, 0),
		insta: "https://www.instagram.com/p/CrURel3pQ0F/",
		pic: "eventpics/externalElections.png",
	},
	{
		id: 1,
		title: "Example GIM Day",
		date: new Date(2023, 8, 28),
		insta: "https://instagram.com/rutgers_vsa",
		pic: "vsaLogo.jpg",
	},
	{
		id: 2,
		title: "Example Spill The Tea Day",
		date: new Date(2023, 11, 25),
		insta: "https://instagram.com/rutgers_vsa",
		pic: "vsaLogo.jpg",
	},
	{
		id: 3,
		title: "Another Example GIM Day",
		date: new Date(2023, 12, 14),
		insta: "https://instagram.com/rutgers_vsa",
		pic: "vsaLogo.jpg",
	},
	{
		id: 4,
		title: "Hidden GIM Day",
		date: new Date(2024, 1, 25),
		insta: "https://instagram.com/rutgers_vsa",
		pic: "vsaLogo.jpg",
	},
	{
		id: 5,
		title: "Example Miss Asia Day",
		date: new Date(2024, 3, 13),
		insta: "https://instagram.com/rutgers_vsa",
		pic: "vsaLogo.jpg",
	},
];

var UpcomingEventsDB = [];

whatsNext();

function whatsNext() {
	for (var i = 0; i < InitialUpcomingEventsDB.length; i++) {
		var currentDate = new Date();
		if (currentDate <= InitialUpcomingEventsDB[i].date) {
			var tempEvent = {
				id: InitialUpcomingEventsDB[i].id,
				title: InitialUpcomingEventsDB[i].title,
				date: InitialUpcomingEventsDB[i].date.toLocaleDateString("en-US"),
				insta: InitialUpcomingEventsDB[i].insta,
				pic: InitialUpcomingEventsDB[i].pic,
			};
			UpcomingEventsDB.push(tempEvent);
		}
	}
}

if (UpcomingEventsDB.length == 0) {
	UpcomingEventsDB.push({
		id: UpcomingEventsDB.length,
		title: "NO OTHER EVENTS PLANNED",
		date: Date,
		insta: "",
		pic: "",
	});
	UpcomingEventsDB.push({
		id: UpcomingEventsDB.length,
		title: "NO OTHER EVENTS PLANNED",
		date: "",
		insta: "",
		pic: "",
	});
} else if (UpcomingEventsDB.length == 1) {
	UpcomingEventsDB.push({
		id: UpcomingEventsDB.length,
		title: "NO OTHER EVENTS PLANNED",
		date: "",
		insta: "",
		pic: "",
	});
}

export default UpcomingEventsDB;
