"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createEvent } from "@/components/prisma-functions";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
	event_name: z.string(),
	event_date: z.date(),
	location: z.string(),
	event_desc: z.string(),
	thumbnail: z.string(),
	semester: z.string(),
});

export function AddEventForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			event_name: "",
			event_date: null,
			location: "",
			event_desc: "",
			thumbnail: "",
			semester: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const createdEvent = await createEvent({
			event_name: values.event_name,
			event_date: values.event_date,
			location: values.location,
			event_desc: values.event_desc,
			thumbnail: values.thumbnail,
			semester: values.semester,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="event_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name of the Event</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Train to Vietnam" {...field} />
							</FormControl>
							<FormDescription>
								Input the name of the past event.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="event_date"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date of the Event</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormDescription>Full name of the board member.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Location of the event</FormLabel>
							<FormControl>
								<Input placeholder="Busch MPR" {...field} />
							</FormControl>
							<FormDescription>Position held by board member.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="event_desc"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Event Description</FormLabel>
							<FormControl>
								<Textarea placeholder="VSA Presents..." {...field} />
							</FormControl>
							<FormDescription>
								Paste the description of the event here.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="thumbnail"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Facebook Handle</FormLabel>
							<FormControl>
								<Input placeholder="image/..." {...field} />
							</FormControl>
							<FormDescription>
								Paste the link to the Cloudinary image here.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="semester"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Semester</FormLabel>
							<FormControl>
								<Input placeholder="ex. Spring 2023, Fall 2024" {...field} />
							</FormControl>
							<FormDescription>
								Input the semester that the event was held in. The season must
								be capitalized and must contain the full year.
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
