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
				<div className="py-0 px-20 text-[1.05em]">
					<p className="leading-10">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
						totam vel deleniti temporibus porro facilis, a debitis facere iure
						pariatur quae quos optio dolore nostrum eos neque id quibusdam
						rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Magni totam vel deleniti temporibus porro facilis, a debitis facere
						iure pariatur quae quos optio dolore nostrum eos neque id quibusdam
						rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Magni totam vel deleniti temporibus porro facilis, a debitis facere
						iure pariatur quae quos optio dolore nostrum eos neque id quibusdam
						rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Magni totam vel deleniti temporibus porro facilis, a debitis facere
						iure pariatur quae quos optio dolore nostrum eos neque id quibusdam
						rerum?
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
