"use client";

import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div className=" justify-center items-center text-center m-auto">
			<h1 className="font-5xl">Welcome!</h1>
			<Separator className="my-5" />
			<h3>
				First Time Here?
				<br />
				Head over to the Documentation tab to view instructions to navigate the
				site.
			</h3>
		</div>
	);
}
