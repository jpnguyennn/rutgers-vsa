import { z } from "zod";

// ZOD FORM SCHEMA FOR BOARD MEMBERS

export const BoardMemberSchema = z.object({
	positional_id: z.number().or(z.string()).pipe(z.coerce.number()),
	full_name: z.string(),
	position: z.string(),
	photo_url: z.string(),
	facebook: z.string(),
	instagram: z.string(),
	vsa_email: z.string(),
	year: z.number().or(z.string()).pipe(z.coerce.number()),
	major: z.string(),
   minor: z.string().optional(),
	why_vsa: z.string(),
});
