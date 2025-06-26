"use client";

import GalleryPhotocard from "@/components/gallery/GalleryPhotocard";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GalleryTable(full_data) {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState(full_data.full_data);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
		console.log("search term: ", searchTerm);
	};

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setFilteredData(
				searchTerm == ""
					? full_data.full_data
					: full_data.full_data.filter((item) =>
							item.event_name
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
					  )
			);
		}, 500);

		return () => clearTimeout(timeoutID);
	}, [full_data.full_data, searchTerm]);

	return (
		<div className="my-20 mx-8 lg:mx-32">
			<div className="flex items-center py-4 justify-between">
				<Input
					type="search"
					placeholder="Search Events..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</div>
			<div className="p-10 flex flex-wrap justify-center gap-4 place-content-center">
				{filteredData?.length > 0 ? (
					filteredData.map((item) => {
						const rotation: number = Math.random() * 5 - 2.5;

						return (
							<div
								className="sm:align-center flex flex-col lg:flex-row w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)] rotate-[--rotation-angle] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0"
								id="gallery_item_whole"
								key={item.id}
								style={
									{
										"--rotation-angle": `${rotation}deg`,
									} as React.CSSProperties
								}
							>
								<Link href={`/`}>
									<GalleryPhotocard
										event_name={item.event_name}
										date={item.event_date}
										cover_picture={item.thumbnail}
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
