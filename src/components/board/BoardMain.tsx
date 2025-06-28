"use client";

import "@/styles/board.css";
import React, { useEffect, useState } from "react";
import { BoardMember } from "../../lib/interfaces/admin";
import BoardPort from "./BoardPort";
import BoardLoading from "./BoardLoading";

const BoardMain = () => {
	const [loading, setLoading] = useState(false);
	const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);

	useEffect(() => {
		setLoading(true)

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
			} finally {
				setLoading(false)
			}
		};

		fetchBoardMembers();
	}, []);

	return (
		<div>
			{loading && <BoardLoading />}
			<div
				className="p-10 flex flex-wrap justify-center gap-10 place-content-center"
				id="board"
			>
				{boardMembers.map((member: BoardMember) => (
					<div
						key={member.id}
						className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]"
					>
						<BoardPort member={member} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BoardMain;
