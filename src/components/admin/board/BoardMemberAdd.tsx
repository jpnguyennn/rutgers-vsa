"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

import { BoardMemberSchema } from "@/lib/forms/admin";
import { useRouter } from "next/navigation";

export function AddBoardMemberForm() {
	const router = useRouter();

	const form = useForm<z.infer<typeof BoardMemberSchema>>({
		resolver: zodResolver(BoardMemberSchema),
		defaultValues: {
			positional_id: 0,
			full_name: "",
			position: "",
			photo_url: "",
			facebook: "",
			instagram: "",
			vsa_email: "",
			year: 0,
			major: "",
			minor: "",
			why_vsa: "",
		},
	});

	async function onSubmit(values: z.infer<typeof BoardMemberSchema>) {
		try {
			const response = await fetch("/api/board", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const result = await response.json();

			if (response.ok) {
				router.refresh();
				console.log(result)
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="positional_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Positional ID</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="0"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Refer to the documentation to figure out what ID
								to input here based on the position of the
								member.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="full_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Board Member Name</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormDescription>
								Full name of the board member.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="position"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Board Position</FormLabel>
							<FormControl>
								<Input
									placeholder="Cultural Chair"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Position held by board member.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="vsa_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>VSA Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ruvsa.position@gmail.com"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								VSA email belonging to the board member.
							</FormDescription>
							<FormMessage />
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
								<Input placeholder="/image/..." {...field} />
							</FormControl>
							<FormDescription>Ignore for now.</FormDescription>
							<FormMessage />
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
								<Input placeholder="john.doe" {...field} />
							</FormControl>
							<FormDescription>
								Facebook handle of board member.
							</FormDescription>
							<FormMessage />
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
								<Input placeholder="john.doe" {...field} />
							</FormControl>
							<FormDescription>
								Instagram handle of board member.
							</FormDescription>
							<FormMessage />
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
									placeholder="2026"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Graduating year of the board member.
							</FormDescription>
							<FormMessage />
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
									placeholder="Computer Science"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Major(s) belonging to the board member.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="minor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Minors(s)</FormLabel>
							<FormControl>
								<Input placeholder="Music" {...field} />
							</FormControl>
							<FormDescription>
								Minor(s) belonging to the board member.
							</FormDescription>
							<FormMessage />
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
									placeholder="I chose VSA because..."
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Copy the &quot;Why VSA?&quot; prompt from eboard
								reveal.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Add Position</Button>
			</form>
		</Form>
	);
}
