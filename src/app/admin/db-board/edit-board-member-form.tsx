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
import { Textarea } from "../../../components/ui/textarea";

import { createBoardMember } from "../../../components/prisma-functions";

const formSchema = z.object({
	positional_id: z.number().or(z.string()).pipe(z.coerce.number()),
	full_name: z.string(),
	position: z.string(),
	photo_url: z.string(),
	facebook: z.string(),
	instagram: z.string(),
	vsa_email: z.string(),
	year: z.number().or(z.string()).pipe(z.coerce.number()),
	major: z.string(),
	why_vsa: z.string(),
	slug: z.string(),
});

export function EditBoardMemberForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
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
			why_vsa: "",
			slug: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const createdBoardMember = await createBoardMember({
			positional_id: values.positional_id,
			full_name: values.full_name,
			position: values.position,
			photo_url: values.photo_url,
			facebook: values.facebook,
			instagram: values.instagram,
			vsa_email: values.vsa_email,
			year: values.year,
			major: values.major,
			why_vsa: values.why_vsa,
			slug: values.slug,
		});

		console.log(createdBoardMember);
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
								<Input type="number" placeholder="0" {...field} />
							</FormControl>
							<FormDescription>
								Refer to the documentation to figure out what ID to input here
								based on the position of the member.
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
							<FormDescription>Full name of the board member.</FormDescription>
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
								<Input placeholder="Cultural Chair" {...field} />
							</FormControl>
							<FormDescription>Position held by board member.</FormDescription>
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
					name="vsa_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>VSA Email</FormLabel>
							<FormControl>
								<Input placeholder="ruvsa.position@gmail.com" {...field} />
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
					name="year"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Year</FormLabel>
							<FormControl>
								<Input type="number" placeholder="2026" {...field} />
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
								<Input placeholder="Computer Science" {...field} />
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
					name="why_vsa"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Why VSA?</FormLabel>
							<FormControl>
								<Textarea placeholder="I chose VSA because..." {...field} />
							</FormControl>
							<FormDescription>
								Copy the &quot;Why VSA?&quot; prompt from eboard reveal.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="slug"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Website Slug</FormLabel>
							<FormControl>
								<Input placeholder="john-doe" {...field} />
							</FormControl>
							<FormDescription>
								Please put the board member&apos;s name in lowercase and
								separated with hyphens. This will be used as an extension when
								the portrait is clicked on the board page.
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
