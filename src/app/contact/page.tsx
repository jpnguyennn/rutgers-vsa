import SocialsArea from "@/components/contact/SocialsArea";
import "@/styles/contact.css";
import Link from "next/link";
import React, { useState } from "react";

function ContactEmail({ email }) {
	const build_link = "mailto: " + email;

	return <a href={build_link}>{email}</a>;
}

async function getContactData() {
	let response = await fetch("http://ruvsa-api.vercel.app/api/board", {
		next: { revalidate: 3600 },
	});
	return response.json();
}

export default async function Contact() {
	const ContactData = await getContactData();

	ContactData.sort(function (a, b) {
		return a.member_id - b.member_id;
	});

	return (
		<>
			<div className="my-20 mx-auto justify-center text-center ">
				<h1>Contact Us</h1>
			</div>
			<div className="justify-center items-center flex">
				<div className="m-8 inline-flex" id="contact_container">
					<div
						className="mx-16 my-0 border-r-[0.25rem] border-[rgb(156, 156, 156)] border-solid"
						id="column_left"
					>
						<div className="p-20" id="emails">
							<h1 className="mb-8">
								Contact us individually:
								<br />
							</h1>
							<p className="mb-8">
								<strong>For general information:</strong>{" "}
								<a href="mailto:rutgersvsa@gmail.com">rutgersvsa@gmail.com</a>
							</p>

							{ContactData.map((item) => (
								<p key={item.member_id}>
									<strong>{item.name}: </strong>
									<ContactEmail email={item.vsa_email} />
								</p>
							))}
						</div>
					</div>

					<div>
						<div className="p-16">
							<h1 className="text-5xl">Follow Us On Our Socials</h1>
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
