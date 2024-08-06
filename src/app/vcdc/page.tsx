import PerformanceArea from "@/components/vcdc/PerformanceArea";
import React from "react";
import "./vcdc.css";

const VCDC = () => {
	return (
		<main>
			<div
						className="bg-vcdc-hero bg-center bg-no-repeat bg-cover hero-bg justify-center items-center h-[50vh] lg:h-screen flex"
						id="hero"
					>
						<div className="leading-8 text-white m-auto max-w-4xl md:border-2 md:border-white border-solid flex-col text-center phone:text">
							<div className="lg:bg-[rgba(249,241,241,0.25)] lg:px-12">
								<h1 className="text-[2rem] leading-[2.5rem] md:leading-[5.5rem] md:text-[4rem] font-titles font-bold">
									VIETNAMESE CULTURAL DANCE CREW
								</h1>
							</div>
						</div>
					</div>
			<div
				className="my-8 px-4 lg:m-auto min-h-[600px] grid lg:max-w-4xl content-center text-center"
					id="about"
			>
				<div className="m-13 mb-10 text-5xl font-titles">
					<h1>About VCDC</h1>
				</div>
				<div className="lg:px-20 text-[1.05em]">
					<p className="leading-10">
						The Vietnamese Cultural Dance Crew is a group dedicated to sharing
						and promoting Vietnamese culture through traditional lion and fan
						dancing. By showcasing their art form, VCDC strives to increase
						awareness and appreciation for the rich heritage of Vietnam within
						their community.
					</p>
				</div>
			</div>
			<div className="mb-8 min-h-[30rem] lg:grid text-center" id="perform">
				<div className="font-titles text-[3rem] mb-10">
					<h1>Performances</h1>
				</div>
				<div>
					<PerformanceArea />
				</div>
			</div>
		</main>
	);
};

export default VCDC;
