"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" justify-center items-center text-center m-auto">
			<h1>Welcome!</h1>
			<Separator />
			<h3>
				First Time Here?
				<br />
				Head over to the Documentation tab to view instructions to navigate the
				site.
			</h3>
		</div>
	);
}
