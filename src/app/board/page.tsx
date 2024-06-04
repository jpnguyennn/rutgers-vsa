import React from "react";

import BoardPort from "@/components/board/BoardPort";
import { getBoardMemberData } from "@/components/prisma-functions";

import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";


function ExecutiveBoard({ members }: { members: any }) {
	members.sort(function (a, b) {
		return a.positional_id - b.positional_id;
	});

	return members == null ? (
		<></>
	) : (
		<div className="p-10 items-center grid phone:p-5" id="board">
			{members.map((item) => (
				<BoardPort
					key={item.positional_id}
					img_url={`https://res.cloudinary.com/rutgers-vsa/${item.photo_url}`}
					fullname={item.full_name}
					position={item.position}
					insta={item.instagram}
				/>
			))}
		</div>
	);
}

function Interns({ members }: { members: any }) {
	return members.length == 0 ? (
		<></>
	) : (
		<>
			<div className="my-20 mx-auto text-center">
				<h1>Interns</h1>
			</div>
			<div className="p-10 items-center grid" id="board">
				{members.map((item) => (
					<BoardPort
						key={item.intern_id}
						img_url={`https://res.cloudinary.com/rutgers-vsa/${item.portrait}`}
						fullname={item.name}
						position="Intern"
						insta={item.instagram}
					/>
				))}
			</div>
		</>
	);
}

const Board = async () => {
	const board_res = await getBoardMemberData();

	return (
		<main>
			<div>
				<div className="my-20 mx-auto text-center">
					<h2>2024-2025</h2>
					<h1>EXECUTIVE BOARD</h1>
				</div>
				<ExecutiveBoard members={board_res} />
				{/*<Interns members={res.props.interns} />*/}
			</div>
		</main>
	);
};

export default Board;
