import GalleryBackButton from "@/components/gallery/GalleryBackButton";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

interface PageProps {
	eventId: number;
}

export default async function EventPage({
	params,
}: {
	params: Promise<PageProps>;
}) {
	const { eventId } = await params;

	const event = await prisma.galleryItem.findUnique({
		where: { id: +eventId },
	});

	return (
		<div className="p-20">
			<GalleryBackButton />
			<div className="mb-10 text-center">
				<h1>{event.event_name}</h1>
			</div>
			<div className="flex-col lg:flex lg:flex-row">
				<div className="">
					<Image
						src={event.thumbnailURL}
						alt={event.event_name}
						width={500}
						height={500}
						className="rounded-xl"
					/>
				</div>
				<div className="lg:ml-10 w-full">
					<h2>
						{event.event_date.toDateString() +
							" " +
							event.event_date.toLocaleTimeString()}
					</h2>
					<h2>{event.location}</h2>
					<Separator className="my-10" />
					<p>{event.event_desc}</p>
				</div>
			</div>
		</div>
	);
}
