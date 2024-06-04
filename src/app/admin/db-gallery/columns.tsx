"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import prisma from "@/lib/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// Create new type GalleryItem with the following fields and matching with the Prisma schema
export type GalleryItem = {
	id: number;
	event_name: string;
	event_date: Date;
	location: string;
	event_desc: string;
	thumbnail: string;
	semester: string;
};

// Creating new columns for the table, matching components with the Header titles of each column
export const columns: ColumnDef<GalleryItem>[] = [
	{
		id: "select",
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select Row"
			/>
		),
	},
	{ accessorKey: "event_name", header: "Event Name" },
	{ accessorKey: "event_date", header: "Event Date" },
	{ accessorKey: "location", header: "Event Location" },
	{ accessorKey: "thumbnail", header: "Photo URL" },
	{ accessorKey: "semester", header: "Semester" },
	{
		id: "actions",
		cell: ({ row }) => {
			const member = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open Menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={async () =>
								await prisma.galleryItem.delete({
									where: {
										id: member.id,
									},
								})
							}
						>
							Delete Event
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
