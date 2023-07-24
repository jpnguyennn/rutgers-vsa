import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLinkItem from "./NavbarLinkItem";

const FOOTER_ITEMS = [];

const Footer = () => {
	const logo = require("@/images/vsaLogo.jpg");

	return (
		<footer>
			<div className="p-[50px] text-white" id="footer">
				<div>
					<Link href="/">
						<Image src={logo} alt="VSA LOGO" width={200} height={200}></Image>
					</Link>
				</div>
			</div>
			<div
				className="bg-black text-gray-400 justify-center p-10px"
				id="copyright"
			>
				<p>
					&copy; JohnPaul Nguyen 2023 -{" "}
					<Link href="mailto: johnpaulnguyen0504@gmail.com">
						Contact Webmaster
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
