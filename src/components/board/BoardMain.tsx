import "@/styles/board.css";
import React from "react";
import BoardPort from "./BoardPort";

const BoardMain = ({ board_members }: { board_members: any }) => {
	return (
		<>
			<div className="p-10 items-center grid phone:p-5" id="board">
				{board_members.map((item) => (
					<BoardPort
						key={item.member_id}
						img_url={`https://res.cloudinary.com/rutgers-vsa/${item.portrait}`}
						fullname={item.name}
						position={item.position}
						insta={item.instagram}
					/>
				))}
			</div>
		</>
	);
};

export default BoardMain;
