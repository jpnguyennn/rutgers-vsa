import SocialsArea from "@/components/contact/SocialsArea";
import { getBoardMemberData } from "@/components/prisma-functions";
import "@/styles/contact.css";
import React from "react";

function ContactEmail({ email }) {
	const build_link = "mailto: " + email;

	return <a href={build_link}>{email}</a>;
}

export default async function Contact() {
	const boardMemberData = await getBoardMemberData();

	boardMemberData.sort(function (a, b) {
		return a.positional_id - b.positional_id;
	});

	return (
		<>
			<div className="my-20 mx-auto justify-center text-center">
				<h1>Contact Us</h1>
			</div>
			<div className="justify-center items-center flex flex-col lg:flex-row">
				<div className="mx-8 lg:my-8 lg:inline-flex" id="contact_container">
					<div
						className="mx-16 my-0 sm:border-b-[0.25rem] lg:border-r-[0.25rem] border-[rgb(156, 156, 156)] border-solid"
						id="column_left"
					>
						<div className="p-20 text-center" id="emails">
							<p className="mb-8">
								<strong>For general information:</strong>{" "}
								<a href="mailto:rutgersvsa@gmail.com">rutgersvsa@gmail.com</a>
							</p>

							{boardMemberData.map((item) => (
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
