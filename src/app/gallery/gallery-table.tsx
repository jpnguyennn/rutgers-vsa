"use client";

import GalleryPhotocard from "@/components/gallery/GalleryPhotocard";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
			<div>
				{filteredData?.length > 0 ? (
					filteredData.map((item) => {
						const date = new Date(item.event_date);
						const randomAngle = Math.random() * 11 - 5;

						return (
							<div key={item.id} className="flex-col">
								<Separator />
								<div
									className="sm:align-center flex flex-col lg:flex-row"
									id="gallery_item_whole"
								>
									<GalleryPhotocard
										event_name={item.event_name}
										date={item.event_date}
										cover_picture={item.thumbnail}
										rotation={randomAngle}
									/>
									<div className="sm:text-center my-10 lg:max-w-[75%]">
										<h1 className="sm:text-[2.5rem]">
											{item.event_name}
										</h1>
										<h2 className="sm:text-[1rem]">
											{date.toDateString()} | 9:00 - 10:30
											PM
										</h2>
										<h2 className="sm:text-[1rem]">
											{item.location}
										</h2>
										<p>{item.event_desc}</p>
									</div>
								</div>
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
