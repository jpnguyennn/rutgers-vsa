import {
	faDiscord,
	faFacebook,
	faInstagram,
	faTiktok,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import SocialsItem from "./SocialsItem";

const SocialsArea = () => {
	return (
		<div>
			<SocialsItem
				type={faFacebook}
				link="https://www.facebook.com/VSArutgers/"
				title="@VSArutgers"
			/>
			<SocialsItem
				type={faInstagram}
				link="https://www.instagram.com/rutgers_vsa/"
				title="@rutgers_vsa"
			/>
			<SocialsItem
				type={faYoutube}
				link="https://www.youtube.com/channel/UCEMUV6xxQXS6IkciJuEkHoA/"
				title="@Rutgers VSA"
			/>
			<SocialsItem
				type={faYoutube}
				link="https://www.youtube.com/@Rutgers_VCDC"
				title="@Rutgers_VCDC"
			/>
			<SocialsItem
				type={faDiscord}
				link="https://discord.gg/HSSAG3Psnd"
				title="Rutgers VSA"
			/>
			<SocialsItem
				type={faTiktok}
				link="http://www.tiktok.com/@rutgersvsa"
				title="@rutgersvsa"
			/>
		</div>
	);
};

export default SocialsArea;
