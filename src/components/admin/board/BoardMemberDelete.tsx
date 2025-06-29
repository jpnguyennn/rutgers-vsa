"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { toast } from "sonner";

const deleteBoardPosition = async (position_id: number) => {
	try {
		const response = await fetch("/api/board", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: position_id }),
		});

		const result = await response.json();

		if (result.ok) {
			const date = new Date();
			toast("Position Successfully Deleted", {
				description: `Created at: ${date.toISOString()}`,
			});
		} else {
			toast("Error", {
				description: "Could not successfully delete position",
			});
		}
	} catch (error) {
		console.error("Error:", error);
	}
};

export default function DeletePosition({
	position_id,
}: {
	position_id: number;
}) {
	return (
		<div className="w-full">
			<AlertDialog>
				<AlertDialogTrigger className="p-3 text-gray-500 rounded-2xl hover:bg-red-200 hover:text-red-500 transition-all duration-450 ease-in-out flex cursor-grab">
					<Trash />
					<p className="font-noto ml-2 text-base">Delete Position</p>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Are you sure you want to delete this board position?
						</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="cursor-grab">
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							className="bg-red-500 hover:bg-red-300 cursor-grab"
							onClick={async () => {
								await deleteBoardPosition(position_id);
							}}
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
