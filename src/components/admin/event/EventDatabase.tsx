"use client";

import { columns } from "../../../app/admin/gallery/columns";

import { GalleryEvent } from "@/lib/interfaces/admin";
import { useEffect, useState } from "react";
import { DataTable } from "../../../app/admin/gallery/data-table";

export default function GalleryDatabase() {
	const [gallery, setGallery] = useState<GalleryEvent[]>([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await fetch(`/api/gallery`);

				if (!response.ok) {
					throw new Error("Failed to fetch event gallery data");
				}

				const data = await response.json();

				setGallery(data);
			} catch (error) {
				console.error("Failed to fetch gallery events: ", error);
				setGallery([]);
			}
		};

		fetchEvents();
	}, []);

	useEffect(() => {
		console.log(gallery);
	}, []);

	return (
		<div>
			<h1>Edit Gallery Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={gallery} />
			</div>
		</div>
	);
}
