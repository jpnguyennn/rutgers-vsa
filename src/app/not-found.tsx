"use client";

import Link from "next/link";
import React from "react";

export default function FourOFour({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<>
			<div className="min-h-screen">
				<div className="m-auto content-center justify-center text-center p-auto">
					<h1 className="mb-3">404: Page Not Found</h1>
					<p className="text-3xl">Ủa...sao bạn dược kiếm liên này...</p>
				</div>
			</div>
		</>
	);
}
