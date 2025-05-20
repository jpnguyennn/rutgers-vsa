import React from "react";
import "./home.css";

const links = [
	{
		text: "Executive Board",
		url: "/board",
		image: "url('/images/home-board.jpg')",
	},
	{
		text: "Vietnamese Cultural Dance Crew",
		url: "/vcdc",
		image: "url('/images/home-vcdc.jpg')",
	},
	{
		text: "Events",
		url: "/gallery",
		image: "url('/images/home-events.jpg')",
	},
	{
		text: "Contact Us",
		url: "/contact",
		image: "url('/images/home-contact.png')",
	},
];

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
								RUTGERS UNIVERSITY VIETNAMESE STUDENT
								ASSOCIATION
							</h1>
						</div>
					</div>
				</div>

				<div
					className="px-4 lg:m-auto min-h-[600px] lg:max-w-4xl content-center text-center"
					id="about"
				>
					<div className="lg:px-20 text-[1.25rem]">
						<p className="leading-8">
							The Rutgers Vietnamese Student Association&apos;s (VSA)
							mission is to promote awareness and appreciation of
							the Vietnamese culture. VSA is open to people of all
							cultures, ethnicities, and backgrounds, and
							encourages any person that is interested in the
							Vietnamese culture to join. VSA serves to create
							culturally, socially, and educationally significant
							events that stimulate understanding among the
							Vietnamese people and their communities. In
							addition, VSA provides its members with an
							opportunity to interact and exchange ideas vital to
							the growth and prosperity of their communities. VSA
							is dedicated to serving the public through community
							service and the teaching of the Vietnamese language
							and culture.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2">
					{links.map((link, index) => (
						<a
							href={link.url}
							key={index}
							className="flex items-center justify-center h-48 bg-cover bg-center bg-no-repeat hover:bg-opacity-75 transition duration-300 ease-in-out text-white text-2xl font-semibold"
							style={{ backgroundImage: link.image }}
						>
							<div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
								{link.text}
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
}
