"use client";

import GalleryPhotocard from "@/components/gallery/GalleryPhotocard";
import { GalleryEvent } from "@/lib/interfaces/admin";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function GalleryGrid() {
	const [gallery, setGallery] = useState<GalleryEvent[]>([]);
	const [loading, setLoading] = useState(false);
	const [semesters, setSemesters] = useState<string[]>([]);
	const [transition, setTransition] = useState(false);
	const [semesterIndex, setSemesterIndex] = useState(0);

	const currentSemester = semesters[semesterIndex];

	useEffect(() => {
		setLoading(true);

		const fetchSemesters = async () => {
			try {
				const response = await fetch("/api/semesters");

				if (!response.ok) {
					throw new Error("Failed to fetch event semesters");
				}

				const data = await response.json();

				setSemesters(data || []);
			} catch (error) {
				console.error("Failed to fetch semesters: ", error);
				setSemesters([]);
			}
		};

		fetchSemesters();
	}, [currentSemester]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await fetch(
					`/api/gallery?semester=${encodeURIComponent(
						currentSemester
					)}`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch event gallery data");
				}

				const data = await response.json();

				setGallery(data);
			} catch (error) {
				console.error("Failed to fetch gallery events: ", error);
				setGallery([]);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, [currentSemester]);

	const currentEvents = gallery;

	const handleSemesterChange = (direction) => {
		if (transition) return;

		setTransition(true);

		setTimeout(() => {
			if (direction === "next") {
				setSemesterIndex((prev) =>
					prev < semesters.length - 1 ? prev + 1 : prev
				);
			} else {
				setSemesterIndex((prev) => (prev > 0 ? prev - 1 : prev));
			}
		}, 350);

		setTimeout(() => {
			setTransition(false);
		}, 700);
	};

	return (
		<div className="my-20 mx-8 lg:mx-32">
			{/* navigation for the semester */}
			<div className="flex items-center justify-center mb-12">
				<button
					onClick={() => handleSemesterChange("prev")}
					disabled={semesterIndex === 0 || transition}
					className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mr-6"
				>
					<ChevronLeft className="w-6 h-6 text-red-600" />
				</button>

				<div className="text-center min-w-48">
					<h2 className="text-3xl font-bold text-red-800 mb-2">
						{currentSemester}
					</h2>
					<div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
				</div>

				<button
					onClick={() => handleSemesterChange("next")}
					disabled={
						semesterIndex === semesters.length - 1 || transition
					}
					className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ml-6"
				>
					<ChevronRight className="w-6 h-6 text-red-600" />
				</button>
			</div>
			<div className="flex items-center justify-center">
				<div className="mx-auto">
					<Link
						href="https://rutgers.campuslabs.com/engage/organization/vsa"
						target="_blank"
					>
						<Button>GetInvolved</Button>
					</Link>
				</div>
			</div>

			{/* called grid events for the specific semester */}
			<div
				className={`p-10 flex flex-wrap justify-center gap-4 place-content-center transition-all duration-700 ${
					transition
						? "opacity-0 transform translate-y-8"
						: "opacity-100 transform translate-y-0"
				}`}
			>
				{loading}
				{currentEvents.length > 0 ? (
					currentEvents.map((item) => {
						const rotation: number = Math.random() * 5 - 2.5;

						return (
							<div
								className={`sm:align-center flex flex-col lg:flex-row w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)] rotate-[--rotation-angle] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 ${
									transition ? "rotate-0" : ""
								}`}
								id="gallery_item_whole"
								key={item.id}
								style={
									{
										"--rotation-angle": `${rotation}deg`,
									} as React.CSSProperties
								}
							>
								<Link href={`/gallery/${item.id}`}>
									<GalleryPhotocard
										event_name={item.event_name}
										date={item.event_date}
										cover_picture={item.thumbnailURL}
									/>
								</Link>
							</div>
						);
					})
				) : (
					<div>No Results</div>
				)}
			</div>
		</div>
	);
}
