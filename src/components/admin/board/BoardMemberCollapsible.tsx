"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";
import { BoardMember } from "@/lib/interfaces/admin";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { PanelTopOpen } from "lucide-react";
import { useEffect, useState } from "react";
import BoardMemberUpdateForm from "./BoardMemberUpdateForm";

export default function EditBoardMemberAccordion() {
	const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);

	useEffect(() => {
		const fetchBoardMembers = async () => {
			try {
				const response = await fetch("/api/board");

				if (!response.ok) {
					throw new Error("Failed to fetch board member data");
				}

				const data = await response.json();

				data.sort((a, b) => {
					return a.positional_id - b.positional_id;
				});

				setBoardMembers(data);
			} catch (error) {
				console.error("Failed to fetch board members: ", error);
			}
		};

		fetchBoardMembers();
	}, []);

	return (
		<div className="w-full">
			<Accordion className="w-full" type="single" collapsible>
				{boardMembers.map((member: BoardMember) => {
					return (
						<div key={member.positional_id} className="mb-5">
							<AccordionItem
								value={member.positional_id.toString()}
							>
								<AccordionTrigger className="flex w-full">
									<h2 className="text-center">
										{member.position}
									</h2>{" "}
									<PanelTopOpen className="mr-0 ml-auto" />
								</AccordionTrigger>
								<AccordionContent>
									<BoardMemberUpdateForm {...member} />
								</AccordionContent>
							</AccordionItem>
						</div>
					);
				})}
			</Accordion>
		</div>
	);
}
