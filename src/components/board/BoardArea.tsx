import React from "react";

import BoardInterns from "./BoardInterns";
import BoardMain from "./BoardMain";

async function getBoardData() {
	const response = await fetch("http://ruvsa-api.vercel.app/api/board", {
		next: { revalidate: 3600 },
	});
	return await response.json();
}

async function getInternData() {
	const response = await fetch("http://ruvsa-api.vercel.app/api/interns", {
		next: { revalidate: 3600 },
	});
	return await response.json();
}

export default async function BoardArea() {
	const board_data = await getBoardData();
	const intern_data = await getInternData();

	return (
		<div>
			<BoardMain board_members={board_data} />
			<BoardInterns interns={intern_data} />
		</div>
	);
}
