import React, { cache } from "react";

import BoardInterns from "@/components/board/BoardInterns";
import BoardMain from "@/components/board/BoardMain";

async function getBoardData() {
	const response = await fetch("http://127.0.0.1:8000/api/board", {
		cache: "no-store",
	});
	return response.json();
}

async function getInternData() {
	const response = await fetch("http://127.0.0.1:8000/api/interns", {
		cache: "no-store",
	});
	return response.json();
}

export default async function Board() {
	const board_data = await getBoardData();
	const intern_data = await getInternData();

	console.log("board_data", board_data);
	console.log("intern_data", intern_data);

	return (
		<>
			<div>
				<BoardMain board_members={board_data} />
				<BoardInterns interns={intern_data} />
			</div>
		</>
	);
}
