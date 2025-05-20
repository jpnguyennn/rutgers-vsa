"use client";

import logo from "@/images/extLogo.png";
import {
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FooterLinkItem from "./FooterLinkItem";

const FOOTER_ITEMS = [
	{ text: "Home", href: "/" },
	{ text: "Board", href: "/board" },
	{ text: "VCDC", href: "/vcdc" },
	{ text: "Gallery", href: "/gallery" },
	{ text: "Contact", href: "/contact" },
];

const Footer = () => {
	const [navActive, setNavActive] = useState<boolean | null>(null);
	const [activeIdx, setActiveIdx] = useState<number | null>(-1);

	return (
		<footer>
			<div
				className="bg-[rgb(27,18,4)] p-[50px] text-white align-center flex flex-col lg:flex-row"
				id="footer"
			>
				<div className="min-w-full lg:min-w-[70%]">
					<Link href="/">
						<Image
							src={logo}
							alt="VSA LOGO"
							width={200}
							height={200}
						/>
					</Link>
				</div>
				<div className="flex">
					<div>
						<h2>Links:</h2>
						{FOOTER_ITEMS.map((menu, idx) => (
							<div
								onClick={() => {
									setActiveIdx(idx);
									setNavActive(false);
								}}
								key={menu.text}
								className="my-2"
								id="footer_item"
							>
								<FooterLinkItem
									active={activeIdx === idx}
									{...menu}
								/>
							</div>
						))}
					</div>
					<div className="ml-12">
						<div className="flex" id="mini_socials">
							<div
								className="bg-[rgb(255,247,240)] w-[2.15em] text-center text-black text-[1.5rem] p-2 mr-3 rounded-full"
								id="social_bubble"
							>
								<a
									href="https://www.instagram.com/rutgers_vsa/"
									target="_blank"
								>
									<FontAwesomeIcon
										icon={faInstagram}
									></FontAwesomeIcon>
								</a>
							</div>
							<div
								className="bg-[rgb(255,247,240)] w-[2.15em] text-center text-black text-[1.5rem] p-2 mr-3 rounded-full"
								id="social_bubble"
							>
								<a
									href="https://www.facebook.com/VSArutgers/"
									target="_blank"
								>
									<FontAwesomeIcon
										icon={faFacebook}
									></FontAwesomeIcon>
								</a>
							</div>
							<div
								className="bg-[rgb(255,247,240)] w-[2.15em] text-center text-black text-[1.5rem] p-2 mr-3 rounded-full"
								id="social_bubble"
							>
								<a
									href="https://www.youtube.com/channel/UCEMUV6xxQXS6IkciJuEkHoA/"
									target="_blank"
								>
									<FontAwesomeIcon
										icon={faYoutube}
									></FontAwesomeIcon>
								</a>
							</div>
						</div>
						<div className="mt-8">
							<h2>For general inquiries:</h2>
							<a href="mailto: rutgersvsa@gmail.com">
								<div className="flex" id="footer_email">
									<FontAwesomeIcon
										className="text-2xl mr-2"
										icon={faEnvelope}
									></FontAwesomeIcon>
									<p>rutgersvsa@gmail.com</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="bg-[rgb(27,18,4)] text-gray-400 justify-center p-10px"
				id="copyright"
			>
				<p>
					&copy; JohnPaul Nguyen 2023-2025 -{" "}
					<Link href="mailto: johnpaulnguyen0504@gmail.com">
						Contact Webmaster
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
