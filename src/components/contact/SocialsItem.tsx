import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SocialsItem = ({
	type,
	link,
	title,
	color,
}: {
	type: IconDefinition;
	link: string;
	title: string;
	color: string;
}) => {
	return (
		<div>
			<Link href={link} target="_blank">
				<div
					className="my-6 py-6 lg:p-8 border-4 rounded-2xl hover:text-white transition-all duration-200"
					style={{
						color: color,
						borderColor: color,
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.backgroundColor = color;
						e.currentTarget.style.color = "white";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.backgroundColor = "";
						e.currentTarget.style.color = color;
					}}
				>
					<div className="flex items-center justify-center">
						<FontAwesomeIcon
							icon={type}
							className="text-3xl lg:text-4xl mr-8"
						/>
						<p className="font-titles text-2xl lg:text-2xl">
							{title}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default SocialsItem;

/*rgba(41,175,187,0.49) - light blue
 rgb(224,139,127) - pink */
