"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

import { createIntern } from "../../../components/prisma-functions";

const formSchema = z.object({
	full_name: z.string(),
	photo_url: z.string(),
	facebook: z.string(),
	instagram: z.string(),
	year: z.number().or(z.string()).pipe(z.coerce.number()),
	major: z.string(),
});

export function AddInternForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			full_name: "",
			photo_url: "",
			facebook: "",
			instagram: "",
			year: 0,
			major: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const createdIntern = await createIntern({
			full_name: values.full_name,
			photo_url: values.photo_url,
			facebook: values.facebook,
			instagram: values.instagram,
			year: values.year,
			major: values.major,
		});

		console.log(createdIntern)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="full_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Intern Name</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormDescription>Full name of the intern.</FormDescription>
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
							<FormDescription>Facebook handle of intern.</FormDescription>
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
							<FormDescription>Instagram handle of intern.</FormDescription>
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
								<Input type="number" placeholder="2026" {...field} />
							</FormControl>
							<FormDescription>Graduating year of the intern.</FormDescription>
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
								<Input placeholder="Computer Science" {...field} />
							</FormControl>
							<FormDescription>
								Major(s) belonging to the intern.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Add Entry</Button>
			</form>
		</Form>
	);
}
