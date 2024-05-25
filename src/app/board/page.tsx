import React from "react";

import BoardPort from "@/components/board/BoardPort";
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

function ExecutiveBoard({ members }: { members: any }) {
	console.log("board members: ", members);
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
	const res = await getData();

	return (
		<main>
			<div>
				<div className="my-20 mx-auto text-center">
					<h1>EXECUTIVE BOARD</h1>
				</div>
				<ExecutiveBoard members={res.props.board_members} />
				{/*<Interns members={res.props.interns} />*/}
			</div>
		</main>
	);
};

async function getData() {
	// const allBoardMembers = await prisma.boardMember.findMany();
	// const allInterns = await prisma.intern.findMany();
	return {
		props: {
			board_members: [
				{
					id: 1,
					positional_id: 1,
					full_name: "JohnPaul Nguyen",
					position: "Cultural Chair",
					photo_url: "image/upload/v1694568525/ldqk7e9g71vpcfrgoj1e.jpg",
					facebook: "https://www.facebook.com/profile.php?id=100087135307066",
					instagram: "https://www.instagram.com/jp.nguyennn",
					vsa_email: "ruvsa.cultural@gmail.com",
					year: 2026,
					major: "Computer Science and Mathematics",
					why_vsa: "heeheehaahaa",
					slug: "johnpaul-nguyen",
				},
				{
					id: 2,
					positional_id: 2,
					full_name: "Kevin Do",
					position: "Fundraising Chair",
					photo_url: "image/upload/v1694568767/yh4btwumgmxla3c0sgcc.jpg",
					facebook: "https://www.facebook.com/profile.php?id=100087135307066",
					instagram: "https://www.instagram.com/jp.nguyennn",
					vsa_email: "ruvsa.fundraising@gmail.com",
					year: 2025,
					major: "Computer Science and Mathematics",
					why_vsa: "heeheehaahaa",
					slug: "johnpaul-nguyen",
				},
			],
			// interns: allInterns,
		},
	};
}

export default Board;
