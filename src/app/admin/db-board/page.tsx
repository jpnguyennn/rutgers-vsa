import { DataTable } from "@/components/ui/data-table";
import { BoardMember, columns } from "./columns";

async function getData(): Promise<BoardMember[]> {
	return [
		{
			id: 1,
			positional_id: 1,
			full_name: "JohnPaul Nguyen",
			position: "Cultural Chair",
			photo_url: "image/upload/v1694568525/ldqk7e9g71vpcfrgoj1e.jpg",
			facebook: "https://www.facebook.com/profile.php?id=100087135307066",
			instagram: "https://www.instagram.com/jp.nguyennn",
			vsa_email: "ruvsa.cultural@gmail.com",
			year: 2026,
			major: "Computer Science and Mathematics",
			why_vsa: "heeheehaahaa",
			slug: "johnpaul-nguyen",
		},
		{
			id: 2,
			positional_id: 2,
			full_name: "Kevin Do",
			position: "Fundraising Chair",
			photo_url: "image/upload/v1694568767/yh4btwumgmxla3c0sgcc.jpg",
			facebook: "https://www.facebook.com/profile.php?id=100087135307066",
			instagram: "https://www.instagram.com/jp.nguyennn",
			vsa_email: "ruvsa.fundraising@gmail.com",
			year: 2025,
			major: "Computer Science and Mathematics",
			why_vsa: "heeheehaahaa",
			slug: "johnpaul-nguyen",
		},
	];
}

export default async function BoardDatabase() {
	const data = await getData();

	return (
		<div>
			<h1>Edit Board Members Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
