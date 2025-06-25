"use client"

import "@/styles/board.css";
import React, { useEffect, useState } from "react";
import { BoardMember } from "../../lib/interfaces/admin";
import BoardPort from "./BoardPort";

const BoardMain = () => {
	const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);

	useEffect(() => {
		const fetchBoardMembers = async () => {
			try {
				const response = await fetch("/api/board");

				if (!response.ok) {
					throw new Error("Failed to fetch board member data");
				}

				const data = await response.json();

				data.sort((a, b) => {
					return a.positional_id - b.positional_id;
				});

				setBoardMembers(data);
			} catch (error) {
				console.error("Failed to fetch board members: ", error);
			}
		};

		fetchBoardMembers();
	}, []);

	return (
		<>
			<div className="p-10 items-center grid phone:p-5" id="board">
				{boardMembers.map((member) => (
					<div key={member.id}>
						<BoardPort
							img_url={`https://res.cloudinary.com/rutgers-vsa/${member.photo_url}`}
							fullname={member.full_name}
							position={member.position}
							//insta={member.instagram}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default BoardMain;
