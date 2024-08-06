import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
		<div className="my-6 py-6 lg:p-8 border-[rgba(224,138,127,0.34)] border-4">
			<a
				className="flex text-2xl lg:text-3xl text-center justify-center text-[rgb(60,152,160)]
         "
				href={link}
			>
				<FontAwesomeIcon icon={type} className="text-3xl lg:text-4xl mr-8" />
				<p className="font-titles ">{title}</p>
			</a>
		</div>
	);
};

export default SocialsItem;

/*rgba(41,175,187,0.49) - light blue
 rgb(224,139,127) - pink */
