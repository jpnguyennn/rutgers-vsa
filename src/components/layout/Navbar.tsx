"use client";

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
		<header>
			<nav
				className="flex p-4 pt-1 pb-1 justify-between items-center bg-[rgba(0,0,0,0.9)] text-white"
				id="nav"
			>
				<Link href={"/"}>
					<h1 className="font-titles text-2xl">RUTGERS VSA</h1>
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
