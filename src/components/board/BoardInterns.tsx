"use client"

import { Intern } from "@/lib/interfaces/admin";
import "@/styles/board.css";
import { useEffect, useState } from "react";
import InternPort from "./InternPort";

const BoardInterns = () => {
	const [interns, setInterns] = useState<Intern[]>([]);

	useEffect(() => {
		const fetchInterns = async () => {
			try {
				const response = await fetch("/api/interns");

				if (!response.ok) {
					throw new Error("Failed to fetch intern data");
				}

				const data = await response.json();

				data.sort((a, b) => {
					return a.positional_id - b.positional_id;
				});

				setInterns(data);
			} catch (error) {
				console.error("Failed to fetch interns: ", error);
			}
		};

		fetchInterns();
	}, []);

	return interns.length == 0 ? (
		<></>
	) : (
		<>
			<div className="my-20 mx-auto text-center">
				<h1>Interns</h1>
			</div>
			<div className="p-10 items-center grid" id="board">
				{interns.map((intern) => (
					<div key={intern.id}>
						<InternPort
							member={intern}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default BoardInterns;
