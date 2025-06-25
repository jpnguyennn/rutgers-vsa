import { BoardMemberSchema } from "@/components/forms/admin_board_member";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BoardMember } from "@/lib/interfaces/admin";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import DeletePosition from "./BoardMemberDelete";

export default function BoardMemberUpdateForm(board_member: BoardMember) {
	const form = useForm<z.infer<typeof BoardMemberSchema>>({
		resolver: zodResolver(BoardMemberSchema),
		defaultValues: {
			positional_id: board_member.positional_id || 99,
			position: board_member.position || "",
			vsa_email: board_member.vsa_email || "",

			full_name: board_member.full_name || "",
			photo_url: board_member.photo_url || "",
			facebook: board_member.facebook || "",
			instagram: board_member.instagram || "",
			year: board_member.year || 2026,
			major: board_member.major || "",
			minor: board_member.minor || "",
			why_vsa: board_member.why_vsa || "",
		},
	});

	async function onSubmit(values: z.infer<typeof BoardMemberSchema>) {
		const data = {
			id: board_member.id,
			...values,
		};

		console.log(data);

		try {
			const response = await fetch("/api/board", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const errorData = await response.json();

				alert(`Error: ${errorData.error || "Failed to update"}`);
				return;
			}

			alert("Board member updated successfully!");
		} catch (error) {
			console.error("An error occurred during the update:", error);
			alert("An unexpected error occurred. Please try again.");
		}
	}

	return (
		<div className="my-10">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="lg:flex">
						<FormField
							control={form.control}
							name="positional_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Positional ID</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder={board_member.positional_id.toString()}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="vsa_email"
							render={({ field }) => (
								<FormItem className="lg:ml-10 lg:w-full">
									<FormLabel>VSA Email</FormLabel>
									<FormControl>
										<Input
											placeholder={board_member.vsa_email}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="full_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Board Member Name</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.full_name}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="photo_url"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Photo URL</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.photo_url}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="facebook"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Facebook Handle</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.facebook}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="instagram"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Instagram Handle</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.instagram}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Year</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder={board_member.year.toString()}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="major"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Major(s)</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.major}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="minor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Minor(s)</FormLabel>
								<FormControl>
									<Input
										placeholder={board_member.minor}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="why_vsa"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Why VSA?</FormLabel>
								<FormControl>
									<Textarea
										placeholder={board_member.why_vsa}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex">
						<DeletePosition position_id={board_member.id} />
						<Button type="submit" className="w-full">
							Update Position
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
