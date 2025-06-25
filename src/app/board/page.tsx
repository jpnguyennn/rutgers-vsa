import React from "react";

import BoardArea from "@/components/board/BoardArea";

const Board = async () => {
	return (
		<main>
			<div>
				<div className="my-20 mx-auto text-center">
					<h2>2024-2025</h2>
					<h1>EXECUTIVE BOARD</h1>
				</div>
				<BoardArea />
			</div>
		</main>
	);
};

export default Board;
