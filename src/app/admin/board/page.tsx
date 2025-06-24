import EditBoardMemberAccordion from "@/components/admin/board/BoardMemberCollapsible";
import { Button } from "@/components/ui/button";
import { ScrollBar } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { AddBoardMemberForm } from "@/components/admin/board/BoardMemberAdd";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BoardMember } from "@prisma/client";
import { CirclePlus } from "lucide-react";

async function getBoardMemberData(): Promise<BoardMember[]> {
	const boardMembers = await fetch("http://ruvsa.vercel.app/api/board", {
		next: { revalidate: 1 },
	});

	return boardMembers.json();
}

export default async function BoardDatabase() {
	const data = await getBoardMemberData();

	return (
		<div>
			<h1>Edit Board Members Database</h1>
			<div className="container mx-auto py-10">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" className="mb-10">
							<CirclePlus className="pr-2" />
							Create New Position
						</Button>
					</SheetTrigger>

					<SheetContent className="w-1/2">
						<ScrollArea className="h-full">
							<div className="px-10">
								<SheetHeader>
									<SheetTitle>Create New Position</SheetTitle>
								</SheetHeader>
								<AddBoardMemberForm />
							</div>
							<ScrollBar orientation="vertical" />
						</ScrollArea>
					</SheetContent>
				</Sheet>
				<EditBoardMemberAccordion />
			</div>
		</div>
	);
}
