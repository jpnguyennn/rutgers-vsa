import "@/styles/upcoming.css";
import React, { useState } from "react";
import UpcomingEvent from "./UpcomingEvent";

function AddMore(props) {
	const [postNum, setPostNum] = useState(3); // Default number of posts dislplayed

	function handleClick() {
		setPostNum((prevPostNum) => prevPostNum + 3); // 3 is the number of posts you want to load per click
	}

	console.log(props.events);

	return (
		<div>
			{props.events.slice(0, postNum).map((item) => (
				<div key={item.id}>
					<UpcomingEvent
						event={item.title}
						post={item.insta}
						date={item.date}
						pic={item.pic}
					/>
				</div>
			))}
			<div>
				<button
					className="min-w-[15rem] text-4xl min-h-[5rem] bg-white rounded-[10px] text-black"
					onClick={handleClick}
					id="load_more"
				>
					Load More
				</button>
			</div>
		</div>
	);
}

export default AddMore;
