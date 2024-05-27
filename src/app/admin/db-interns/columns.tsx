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

// Create new type Intern with the following fields and matching with the Prisma schema
export type Intern = {
	id: number;
	full_name: string;
	photo_url: string;
	facebook: string;
	instagram: string;
	year: number;
	major: string;
};

// Creating new columns for the table, matching components with the Header titles of each column
export const columns: ColumnDef<Intern>[] = [
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
	{ accessorKey: "full_name", header: "Name" },
	{ accessorKey: "photo_url", header: "Photo URL" },
	{ accessorKey: "facebook", header: "Facebook Handle" },
	{ accessorKey: "instagram", header: "Instagram Handle" },
	{ accessorKey: "year", header: "Year" },
	{ accessorKey: "major", header: "Major" },
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
								await prisma.intern.delete({
									where: {
										id: member.id,
									},
								})
							}
						>
							Delete Member
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
