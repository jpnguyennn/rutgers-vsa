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
import { useState } from "react";

export function AddEventForm() {
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

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
		setIsSubmitting(true);

		try {
			const eventData = new FormData();
			eventData.append("event_name", values.event_name);
			eventData.append("event_date", values.event_date.toISOString());
			eventData.append("location", values.location);
			eventData.append("event_desc", values.event_desc);
			eventData.append("semester", values.semester);

			if (values.thumbnail instanceof File) {
				eventData.append("thumbnail", values.thumbnail);
			}

			const response = await fetch("/api/gallery", {
				method: "POST",
				body: eventData,
			});

			const result = await response.json();

			if (response.ok) {
				router.refresh();
				console.log(result);
			}
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setIsSubmitting(false);
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
					render={({ field: { onChange, ...fieldProps } }) => {
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						const { value, ...inputProps } = fieldProps;

						return (
							<FormItem>
								<FormLabel>Event Thumbnail</FormLabel>
								<FormControl>
									<div className="space-y-4">
										<div className="flex items-center justify-center w-full">
											<label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
												{previewUrl ? (
													<img
														src={previewUrl}
														alt="Event thumbnail preview"
														className="w-full h-full object-cover rounded-lg"
													/>
												) : (
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<svg
															className="w-8 h-8 mb-4 text-gray-500"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																d="M12 6v6m0 0v6m0-6h6m-6 0H6"
															/>
														</svg>
														<p className="mb-2 text-sm text-gray-500">
															<span className="font-semibold">
																Click to upload
															</span>{" "}
															event thumbnail
														</p>
														<p className="text-xs text-gray-500">
															PNG, JPG or WEBP
															(MAX. 5MB)
														</p>
													</div>
												)}
												<input
													type="file"
													className="hidden"
													accept="image/*"
													name={fieldProps.name}
													ref={fieldProps.ref}
													onBlur={fieldProps.onBlur}
													onChange={(e) => {
														const file =
															e.target.files?.[0];
														if (file) {
															// Validate file type
															if (
																!file.type.startsWith(
																	"image/"
																)
															) {
																alert(
																	"Please select an image file"
																);
																return;
															}

															// Validate file size (5MB limit)
															if (
																file.size >
																5 * 1024 * 1024
															) {
																alert(
																	"File size must be less than 5MB"
																);
																return;
															}

															onChange(file); // Update form value with File object

															// Create preview
															const reader =
																new FileReader();
															reader.onload = (
																e
															) => {
																setPreviewUrl(
																	e.target
																		?.result as string
																);
															};
															reader.readAsDataURL(
																file
															);
														}
													}}
													disabled={isSubmitting}
												/>
											</label>
										</div>
									</div>
								</FormControl>
								<FormDescription>
									Upload an image file for the event
									thumbnail. Images will be automatically
									optimized and stored in Cloudinary.
								</FormDescription>
								<FormMessage />
							</FormItem>
						);
					}}
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
				<Button type="submit">
					{isSubmitting ? "Adding Event..." : "Add Event"}
				</Button>
			</form>
		</Form>
	);
}
