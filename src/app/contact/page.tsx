"use client";

import VCDCSocialsArea from "@/components/contact/VCDCSocialsArea";
import VSASocialsArea from "@/components/contact/VSASocialsArea";
import "@/styles/contact.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact() {
	return (
		<>
			<div className="my-20 mx-auto justify-center text-center">
				<h1>Contact Us</h1>
			</div>
			<div className="justify-center items-center flex flex-col">
				<div className="lg:mx-8">
					<div className="mx-16">
						<div className="p-2 text-center">
							<p className="flex flex-col text-md lg:text-2xl">
								<strong>
									For general inquiries and performance
									requests:
								</strong>{" "}
								<Link
									href="mailto:rutgersvsa@gmail.com"
									target="_blank"
									className="decoration-none pb-2 transition-all duration-200"
								>
									<div className="flex mt-4 items-center justify-center gap-2 border-2 border-gray-500 pb-2 text-gray-500 hover:text-white transition-all duration-200 hover:bg-gray-500 rounded-lg">
										<FontAwesomeIcon
											icon={faEnvelope}
											className="mr-2"
										/>
										<p>rutgersvsa@gmail.com</p>
									</div>
								</Link>
							</p>
						</div>
					</div>

					<div>
						<div className="p-16 text-center">
							<h1 className="lg:text-5xl mb-8">Follow Us!</h1>
							<div className="flex justify-center gap-8 flex-col lg:flex-row">
								<div className="flex flex-col gap-4">
									<h1 className="text-2xl">VSA</h1>
									<VSASocialsArea />
								</div>
								<div className="flex flex-col gap-4">
									<h1 className="text-2xl">VCDC</h1>
									<VCDCSocialsArea />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
