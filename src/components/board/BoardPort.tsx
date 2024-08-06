"use client";

import "@/styles/board.css";
import React from "react";

function BoardPort({
	key,
	img_url,
	fullname,
	position,
	insta,
}: {
	key: number;
	img_url: string;
	fullname: string;
	position: string;
	insta: string;
}) {
	return (
		<div>
			<div
				className="m-10 my-5 p-2 min-h-full sticky justify-center items-center lg:my-10 lg:p-4"
				id="board_port"
			>
				<div className="m-7">
					<div className="align-center items-center text-center justify-center font-titles max-h-[2em]">
						<p className="text-2xl ">
							<strong>{position}</strong>
						</p>
					</div>
					<div
						className="flex justify-center items-center my-4"
						id="port_container"
					>
						<img src={img_url} alt={fullname} id="portrait" />
					</div>
					<div
						className="m-[10px] justify-center items-center text-center"
						id="overlay"
					>
						<div className="font-board-name text-2xl max-h-[1em]">
							{fullname}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoardPort;
