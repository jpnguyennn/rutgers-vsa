import {
	faDiscord,
	faFacebook,
	faInstagram,
	faTiktok,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import SocialsItem from "./SocialsItem";

const VSASocialsArea = () => {
	return (
		<div>
			<SocialsItem
				type={faFacebook}
				link="https://www.facebook.com/VSArutgers/"
				title="@VSArutgers"
				color="#1877F2"
			/>
			<SocialsItem
				type={faInstagram}
				link="https://www.instagram.com/rutgers_vsa/"
				title="@rutgers_vsa"
				color="#C13584"
			/>
			<SocialsItem
				type={faYoutube}
				link="https://www.youtube.com/channel/UCEMUV6xxQXS6IkciJuEkHoA/"
				title="@Rutgers VSA"
				color="#FF0000"
			/>
			<SocialsItem
				type={faDiscord}
				link="https://discord.gg/HSSAG3Psnd"
				title="Rutgers VSA"
				color="#5865F2"
			/>
			<SocialsItem
				type={faTiktok}
				link="http://www.tiktok.com/@rutgersvsa"
				title="@rutgersvsa"
				color="#EE1D52"
			/>
		</div>
	);
};

export default VSASocialsArea;
