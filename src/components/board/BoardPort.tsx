"use client";

import "@/styles/board.css";
import Image from "next/image";
import Link from "next/link";
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
				className="m-10 p-4 min-h-max sticky justify-center items-center phone:my-5 phone:p-2"
				id="board_port"
			>
				<div className="m-7">
					<div className="align-center items-center text-center justify-center font-bold min-h-[5rem]">
						<h1>{position}</h1>
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
						<div className="font-board-name text-3xl">{fullname}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoardPort;
