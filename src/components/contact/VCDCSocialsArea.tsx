import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import SocialsItem from "./SocialsItem";

const VCDCSocialsArea = () => {
	return (
		<div>
			<SocialsItem
				type={faInstagram}
				link="https://www.instagram.com/rutgers.vcdc/"
				title="@rutgers.vcdc"
				color="#C13584"
			/>
			<SocialsItem
				type={faYoutube}
				link="https://www.youtube.com/@Rutgers_VCDC"
				title="@Rutgers_VCDC"
				color="#FF0000"
			/>
		</div>
	);
};

export default VCDCSocialsArea;
