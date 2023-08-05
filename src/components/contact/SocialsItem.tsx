import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import build from "next/dist/build";
import React from "react";

const SocialsItem = ({
	type,
	link,
	title,
}: {
	type: IconDefinition;
	link: string;
	title: string;
}) => {
	return (
		<div className="my-6 p-8 min-w-full border-[rgba(224,138,127,0.34)] border-4">
			<a
				className="flex text-3xl text-center justify-center text-[rgb(60,152,160)]
         "
				href={link}
			>
				<FontAwesomeIcon icon={type} className="text-4xl mr-8" />
				<p className="font-titles ">{title}</p>
			</a>
		</div>
	);
};

export default SocialsItem;

/*rgba(41,175,187,0.49) - light blue
 rgb(224,139,127) - pink */
