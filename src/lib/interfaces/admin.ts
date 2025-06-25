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

export interface Intern {
	id: number;

	full_name: string;
	photo_url: string;
	facebook?: string;
	instagram?: string;
	year?: number;
	major?: string;
	minor?: string;
}

export interface Event {
	id: number;

	event_name: string;
	event_data: Date;
	event_desc: string;
	thumbnail: string;
	semester: string;
	location: string;
}
