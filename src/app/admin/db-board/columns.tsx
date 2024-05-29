"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { deleteBoardMember } from "@/components/prisma-functions";
import { EditBoardMemberForm } from "./edit-board-member-form";

// Create new type BoardMember with the following fields and matching with the Prisma schema
export type BoardMember = {
	id: number;
	positional_id: number;
	full_name: string;
	position: string;
	photo_url: string;
	facebook: string;
	instagram: string;
	vsa_email: string;
	year: number;
	major: string;
	why_vsa: string;
	slug: string;
};

// Creating new columns for the table, matching components with the Header titles of each column
export const columns: ColumnDef<BoardMember>[] = [
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
	{
		accessorKey: "positional_id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Positional ID
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{ accessorKey: "full_name", header: "Name" },
	{ accessorKey: "position", header: "Position" },
	{ accessorKey: "photo_url", header: "Photo URL" },
	{ accessorKey: "facebook", header: "Facebook Handle" },
	{ accessorKey: "instagram", header: "Instagram Handle" },
	{ accessorKey: "vsa_email", header: "VSA Email" },
	{ accessorKey: "year", header: "Year" },
	{ accessorKey: "major", header: "Major" },
	{ accessorKey: "slug", header: "Member URL Slug" },
	{
		id: "actions",
		cell: ({ row }) => {
			const member = row.original;
			console.log(member.id);

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
						<DropdownMenuSeparator />
						<Sheet>
							<SheetTrigger>
								<DropdownMenuItem>Edit Member</DropdownMenuItem>
							</SheetTrigger>

							<SheetContent className="w-1/2">
								<ScrollArea className="h-full">
									<div className="px-10">
										<SheetHeader>
											<SheetTitle>Create New Database Entry</SheetTitle>
										</SheetHeader>
										<EditBoardMemberForm />
									</div>
									<ScrollBar orientation="vertical" />
								</ScrollArea>
							</SheetContent>
						</Sheet>
						<DropdownMenuItem onClick={() => deleteBoardMember(member.id)}>
							Delete Member
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
