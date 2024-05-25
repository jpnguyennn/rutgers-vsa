import "@/app/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		template: "Rutgers VSA Admin Panel | %s",
		default: "Rutgers VSA Admin Panel | HOME",
	},
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-8 w-full overflow-y-auto flex h-full">{children}</div>
	);
}
