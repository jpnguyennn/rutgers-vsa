"use client"

import SocialsArea from "@/components/contact/SocialsArea";
import { BoardMember } from "@/lib/interfaces/admin";
import "@/styles/contact.css";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";

function ContactEmail({ email }) {
	const build_link = "mailto: " + email;

	return <a href={build_link}>{email}</a>;
}

export default function Contact() {
	const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);

	useEffect(() => {
		const fetchBoardMembers = async () => {
			try {
				const response = await fetch("/api/board");

				if (!response.ok) {
					return NextResponse.json(
						{ error: "Could not fetch board members" },
						{ status: 400 }
					);
				}

				const data = await response.json();
				setBoardMembers(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchBoardMembers();
	}, []);

	return (
		<>
			<div className="my-20 mx-auto justify-center text-center">
				<h1>Contact Us</h1>
			</div>
			<div className="justify-center items-center flex flex-col lg:flex-row">
				<div
					className="mx-8 lg:my-8 lg:inline-flex"
					id="contact_container"
				>
					<div
						className="mx-16 my-0 sm:border-b-[0.25rem] lg:border-r-[0.25rem] border-[rgb(156, 156, 156)] border-solid"
						id="column_left"
					>
						<div className="p-20 text-center" id="emails">
							<p className="mb-8">
								<strong>For general information:</strong>{" "}
								<a href="mailto:rutgersvsa@gmail.com">
									rutgersvsa@gmail.com
								</a>
							</p>

							{boardMembers.map((item) => (
								<p key={item.positional_id}>
									<strong>{item.full_name}: </strong>
									<ContactEmail email={item.vsa_email} />
								</p>
							))}
						</div>
					</div>

					<div>
						<div className="p-16 text-center">
							<h1 className="lg:text-5xl">Follow Us!</h1>
							<div>
								<SocialsArea />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
