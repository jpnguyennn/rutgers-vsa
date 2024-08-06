import UpcomingArea from "@/components/upcoming/UpcomingArea";
import React from "react";
import "./home.css";

export default function Home() {
	return (
		<>
			<div>

					<div
						className="hero-bg bg-home-hero justify-center items-center h-[50vh] lg:h-screen flex"
						id="hero"
					>
						<div className="leading-8 text-white m-auto max-w-4xl md:border-2 md:border-white border-solid flex-col text-center phone:text">
							<div className="lg:bg-[rgba(249,241,241,0.25)] lg:px-12">
								<h1 className="text-[2rem] leading-[2.5rem] md:leading-[5.5rem] md:text-[4rem] font-titles font-bold">
									RUTGERS UNIVERSITY VIETNAMESE STUDENT ASSOCIATION
								</h1>
							</div>
						</div>
					</div>

				<div
					className="my-8 px-4 lg:m-auto min-h-[600px] grid lg:max-w-4xl content-center text-center"
					id="about"
				>
					<div className="m-13 mb-10 text-5xl font-titles">
						<h1>About Rutgers VSA</h1>
					</div>
					<div className="lg:px-20 text-[1.05em]">
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

				<div className="mb-8 min-h-[30rem] lg:grid text-center" id="upcoming">
					<div className="font-titles mb-10">
						<h1>Upcoming Event</h1>
					</div>
					<div id="events_container" className="">
						<UpcomingArea />
					</div>
				</div>
			</div>
		</>
	);
}
