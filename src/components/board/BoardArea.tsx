import React from "react";

import BoardInterns from "./BoardInterns";
import BoardMain from "./BoardMain";

export default async function BoardArea() {
	return (
		<div>
			<BoardMain />
			<BoardInterns />
		</div>
	);
}
