import React from "react";

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
				className="my-4 px-4 lg:m-auto min-h-[400px] lg:max-w-4xl content-center text-center"
				id="about"
			>
				<div className="lg:px-20 text-[1.5em]">
					<p className="leading-8">
						The Vietnamese Cultural Dance Crew (VCDC) is a group
						dedicated to sharing and promoting Vietnamese culture
						through traditional lion and fan dancing. By showcasing
						their art form, VCDC strives to increase awareness and
						appreciation for the rich heritage of Vietnam within
						their community.
					</p>
				</div>
			</div>
			<div className="w-full" id="perform">
				<div className="bg-vcdc-past flex items-center justify-center text-center bg-cover bg-center bg-no-repeat text-white p-auto min-h-[600px]">
					<div className="items-center text-center justify-center">
						<h1 className="text-[3rem] mb-10">
							Want to see what we can do?
						</h1>
						<div className="px-10">
							<a
								href="https://www.youtube.com/@RutgersVCDC/videos"
								target="_blank"
							>
								<div className="border-white border-2 hover:bg-white hover:text-black text-[1.5rem] duration-200 rounded-xl">
									PAST PERFORMANCES
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full" id="join">
				<div className="bg-vcdc-join flex items-center justify-center text-center bg-cover bg-center bg-no-repeat text-white p-auto min-h-[600px]">
					<div className="items-center text-center justify-center">
						<h1 className="text-[3rem] mb-5">Interested in joining?</h1>
						<p className="text-[1.5rem]">
							Follow our instagram @rutgers.vcdc for updates on
							auditions!
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default VCDC;
