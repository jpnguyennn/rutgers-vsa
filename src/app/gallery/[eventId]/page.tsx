import GalleryBackButton from "@/components/gallery/GalleryBackButton";
import prisma from "@/lib/prisma";
import React from "react";
import Image from "next/image";

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
			<div className="flex-cols lg:flex">
				<Image src={event.thumbnailURL} alt={event.event_name} width={500} height={500} className="rounded-xl"/>
				<div>{event.event_name}</div>
			</div>
			
		</div>
	);
}
