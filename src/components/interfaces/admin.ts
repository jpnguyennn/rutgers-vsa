export interface BoardMember {
	id: number;
	positional_id: number;
	position: string;
	vsa_email: string;

	full_name: string;
	photo_url: string;
	facebook?: string;
	instagram?: string;
	year?: number;
	major?: string;
	minor?: string;
	why_vsa?: string;
}
