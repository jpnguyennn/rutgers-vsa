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
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { NextResponse } from "next/server";
import { toast } from "sonner";

// Create new type GalleryItem with the following fields and matching with the Prisma schema
export type GalleryItem = {
	id: number;
	event_name: string;
	event_date: Date;
	location: string;
	event_desc: string;
	thumbnailURL: string;
	thumbnailPublicURL: string;
	semester: string;
};

async function handleDelete(event_id: number) {
	try {
		const response = await fetch("/api/gallery", {
			method: "DELETE",
			headers: { "Content-Type": "application / json" },
			body: JSON.stringify({ id: event_id }),
		});

		const result = await response.json();

		if (result.ok) {
			const date = new Date();
			toast("Event Successfully Deleted", {
				description: `Created at: ${date.toISOString}`,
			});
		} else {
			return NextResponse.json(
				{ error: "Could not successfully delete event..." },
				{ status: 409 }
			);
		}
	} catch (error) {
		console.error("Error:", error);
	}
}


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
	{
		accessorKey: "event_date",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Event Date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{ accessorKey: "location", header: "Event Location" },
	{ accessorKey: "thumbnailURL", header: "Photo URL" },
	{ accessorKey: "thumbnailPublicURL", header: "Photo Public URL" },
	{ accessorKey: "semester", header: "Semester" },
	{
		id: "actions",
		cell: ({ row }) => {
			const event = row.original;

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
								handleDelete(event.id)
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
