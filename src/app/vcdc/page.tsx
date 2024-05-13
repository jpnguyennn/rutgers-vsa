import PerformanceArea from "@/components/vcdc/PerformanceArea";
import React from "react";
import "./vcdc.css";

const VCDC = () => {
	return (
		<main>
			<div
				className="bg-vcdc-hero bg-center bg-no-repeat bg-cover h-screen min-h-screen flex justify-center items-center phone:min-h-[50vh]"
				id="hero"
			>
				<div className="text-white bg-[rgba(249,241,241,0.25)] py-24 px-12 max-w-4xl border-2 border-white border-solid flex-col text-center phone:text">
					<h1 className="text-[4rem] font-titles font-bold">
						VIETNAMESE CULTURAL DANCE CREW
					</h1>
				</div>
			</div>
			<div
				className="m-auto min-h-[600px] grid max-w-4xl content-center text-center"
				id="about"
			>
				<div className="m-13 mb-10 text-5xl font-titles">
					<h1>About VCDC</h1>
				</div>
				<div className="py-0 px-20 text-[1.50em]">
					<p className="leading-10">
						The Vietnamese Cultural Dance Crew is a group dedicated to sharing
						and promoting Vietnamese culture through traditional lion and fan
						dancing. By showcasing their art form, VCDC strives to increase
						awareness and appreciation for the rich heritage of Vietnam within
						their community.
					</p>
				</div>
			</div>
			<div className="text-center items-center my-8" id="perform">
				<div className="font-titles">
					<h1>Past Performances</h1>
				</div>
				<div>
					<PerformanceArea />
				</div>
			</div>
		</main>
	);
};

export default VCDC;
