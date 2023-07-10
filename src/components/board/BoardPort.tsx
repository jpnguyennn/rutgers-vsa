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
		<>
			<div
				className="m-10 min-h-full sticky justify-center items-center"
				id="board_port"
			>
				<div className="m-7">
					<div className="align-center items-center text-center justify-center font-bold min-h-[5rem]">
						<h1>{position}</h1>
					</div>
					<div
						className="flex justify-center items-center p-5"
						id="port_container"
					>
						<img
							src={img_url}
							alt={fullname}
							width={200}
							height={200}
							id="portrait"
						/>
					</div>
					<div
						className="m-[10px] justify-center items-center text-center"
						id="overlay"
					>
						<div className="font-lesser-titles text-2xl">{fullname}</div>
						<div className="m-auto mt-8">
							<Link href={insta} target="_blank">
								Instagram
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BoardPort;
