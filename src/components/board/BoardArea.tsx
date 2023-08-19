import React from "react";

import BoardInterns from "./BoardInterns";
import BoardMain from "./BoardMain";

async function getBoardData() {
	let response = await fetch("http://ruvsa-api.vercel.app/api/board", {
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
	let board_data = await getBoardData();
	let intern_data = await getInternData();

	board_data.sort(function (a, b) {
		return a.member_id - b.member_id;
	});
	intern_data.sort(function (a, b) {
		return a.member_id - b.member_id;
	});
	console.log("board_data", board_data);

	return (
		<div>
			<BoardMain board_members={board_data} />
			<BoardInterns interns={intern_data} />
		</div>
	);
}
