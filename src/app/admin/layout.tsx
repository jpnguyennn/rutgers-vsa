import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "Rutgers VSA Admin Panel | %s",
		default: "Rutgers VSA Admin Panel | HOME",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-8 w-full overflow-y-auto flex h-full">{children}</div>
	);
}
