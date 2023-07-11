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
					className="hero-bg h-screen min-h-screen flex justify-center items-center"
					id="hero"
				>
					<div className="text-white bg-[rgba(249,241,241,0.25)] py-24 px-12 max-w-4xl border-2 border-white border-solid flex-col text-center">
						<h1 className="text-[4rem] font-titles font-bold">
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
					className="m-[50px] mx-[10rem] min-h-[600px] grid justify-center items-center text-center overflow-hidden"
					id="events"
				>
					<div className="font-titles mb-16">
						<h1 className="">Important Events</h1>
					</div>
					<div className="fallsem">
						<div className="imagecol">
							<Image src={stt} alt="" width={520} height={300} />
						</div>
						<div className="leftcol">
							<h2>Fall Semester - Spill The Tea</h2>
							<p>
								The creativity of the RUVSA&apos;s board shines the brightest in
								the fall semester&apos;s biggest event! You will find a host of
								activities to participate, including a short film that will need
								the choices of the audience to fun minigames in between each
								portion of the film. Come on out and see what our historians
								have cooked up!
							</p>
						</div>
					</div>
					<div className="springsem">
						<div className="rightcol">
							<h2>Spring Semester - Miss Asia</h2>
							<p>
								The biggest event of the spring semester, Miss Asia! Here, a
								variety of nationalities are presented by their representatives
								and compete to see who will be crowned Miss Asia. Many
								performances will be prepared by the participants, allowing for
								a night of excitement and tensiion. It&apos;s the event you
								wouldn&apos;t want to miss!
							</p>
						</div>
						<div className="imagecol">
							<Image src={missasia} alt="" width={520} height={300} />
						</div>
					</div>
				</div>
				<div
					className="min-h-[30rem] grid justify-center items-center text-center"
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
