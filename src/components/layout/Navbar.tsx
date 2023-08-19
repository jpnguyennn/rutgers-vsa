"use client";

import logo from "@/images/extLogo.png";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLinkItem from "./NavbarLinkItem";

const NAV_LIST = [
	{ text: "Home", href: "/" },
	{ text: "Board", href: "/board" },
	{ text: "VCDC", href: "/vcdc" },
	{ text: "Gallery", href: "/gallery" },
	{ text: "Contact", href: "/contact" },
];

const Navbar = () => {
	const [navActive, setNavActive] = useState<boolean | null>(null);
	const [activeIdx, setActiveIdx] = useState<number | null>(-1);

	return (
		<header className="">
			<nav
				className="flex p-4 pt-1 pb-1 justify-between items-center bg-[rgba(27,18,4,0.975)] text-white"
				id="nav"
			>
				<Link className="py-2" href={"/"}>
					<Image src={logo} alt="VSA LOGO" width={90} height={90} />
				</Link>
				<div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{NAV_LIST.map((menu, idx) => (
						<div
							onClick={() => {
								setActiveIdx(idx);
								setNavActive(false);
							}}
							key={menu.text}
							id="navbar_item"
						>
							<NavbarLinkItem active={activeIdx === idx} {...menu} />
						</div>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
