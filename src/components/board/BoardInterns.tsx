import "@/styles/board.css";
import React from "react";
import BoardPort from "./BoardPort";

const BoardInterns = ({ interns }: { interns: any }) => {
	return interns.length == 0 ? (
		<></>
	) : (
		<>
			<div className="my-20 mx-auto text-center">
				<h1>Interns</h1>
			</div>
			<div className="p-10 items-center grid" id="board">
				{interns.map((item) => (
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
};

export default BoardInterns;
