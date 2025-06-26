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

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { EventSchema } from "@/lib/forms/admin";
import { useRouter } from "next/navigation";

export function AddEventForm() {
	const router = useRouter();

	const form = useForm<z.infer<typeof EventSchema>>({
		resolver: zodResolver(EventSchema),
		defaultValues: {
			event_name: "",
			event_date: null,
			location: "",
			event_desc: "",
			thumbnail: "",
			semester: "",
		},
	});

	async function onSubmit(values: z.infer<typeof EventSchema>) {
		try {
			const response = await fetch("/api/gallery", {
				method: "POST",
				headers: {
					Content_type: "application.json",
				},
				body: JSON.stringify(values),
			});

			const result = await response.json();

			if (response.ok) {
				router.refresh();
				console.log(result)
			}
		} catch (error) {
			console.error("Error: ", error);
		}
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
								<Input
									type="text"
									placeholder="Train to Vietnam"
									{...field}
								/>
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
												!field.value &&
													"text-muted-foreground"
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
								<PopoverContent
									className="w-auto p-0"
									align="start"
								>
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() ||
											date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormDescription>
								Select the date of the event.
							</FormDescription>
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
							<FormDescription>
								Input location of the event.
							</FormDescription>
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
								<Textarea
									placeholder="VSA Presents..."
									{...field}
								/>
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
							<FormLabel>Thumbnail</FormLabel>
							<FormControl>
								<Input placeholder="image/..." {...field} />
							</FormControl>
							<FormDescription>
								Paste the link to the cloudinary url of the
								image.
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
								<Input
									placeholder="ex. Spring 2023, Fall 2024"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Input the semester that the event was held in.
								The season must be capitalized and must contain
								the full year.
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
