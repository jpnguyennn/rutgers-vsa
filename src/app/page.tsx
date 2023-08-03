import { Upcoming } from "@/components/upcoming/Upcoming";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import "./home.css";

export default function Home() {
	const stt = require("@/images/stt.jpg");
	const missasia = require("@/images/missasia.jpg");

	return (
		<>
			<div>
				<div
					className="hero-bg bg-home-hero h-screen min-h-screen flex justify-center items-center"
					id="hero"
				>
					<div className="leading-8 text-white bg-[rgba(249,241,241,0.25)] py-24 px-12 max-w-4xl border-2 border-white border-solid flex-col text-center phone:text">
						<h1 className="leading-[5.5rem] text-[4rem] font-titles font-bold">
							RUTGERS VIETNAMESE STUDENT ASSOCIATION
						</h1>
						<p className="text-[1.5rem]">
							Welcome to the RUVSA webpage! Enjoy your stay and explore what our
							organization has to offer.
						</p>
					</div>
				</div>
				<div
					className="m-auto min-h-[600px] grid max-w-4xl content-center text-center"
					id="about"
				>
					<div className="m-13 mb-10 text-5xl font-titles">
						<h1>About Rutgers VSA</h1>
					</div>
					<div className="py-0 px-20 text-[1.05em]">
						<p className="leading-10">
							Our mission in the Vietnamese Student Association (VSA) at Rutgers
							University is to promote awareness and appreciation of the
							Vietnamese culture. VSA is open to people of all cultures,
							ethnicities, and backgrounds, and encourages any person that is
							interested in the Vietnamese culture to join. VSA serves to create
							culturally, socially, and educationally significant events that
							stimulate understanding among the Vietnamese people and their
							communities. In addition, VSA provides its members with an
							opportunity to interact and exchange ideas vital to the growth and
							prosperity of their communities. VSA is dedicated to serving the
							public through community service and the teaching of the
							Vietnamese language and culture.
						</p>
					</div>
				</div>

				<div
					className="mb-8 min-h-[30rem] grid justify-center items-center text-center"
					id="upcoming"
				>
					<div className="font-titles mb-20">
						<h1>Upcoming Events</h1>
					</div>
					<div id="events_container">
						<Upcoming />
					</div>
				</div>
			</div>
		</>
	);
}
