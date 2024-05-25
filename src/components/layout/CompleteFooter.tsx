"use client";

import { usePathname } from "next/navigation";
import React from "react";

import Footer from "./Footer";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-inter",
});

export default function CompleteFooter() {
	const pathName = usePathname();
	return pathName.includes("/admin") ? (
		<></>
	) : (
		<>
			<Footer />
		</>
	);
}
