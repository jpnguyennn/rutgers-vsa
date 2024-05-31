import { Intern, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Intern[]> {
	return [
		{
			id: 1,
			full_name: "JohnPaul Nguyen",
			photo_url: "image/upload/v1694568525/ldqk7e9g71vpcfrgoj1e.jpg",
			facebook: "https://www.facebook.com/profile.php?id=100087135307066",
			instagram: "https://www.instagram.com/jp.nguyennn",
			year: 2026,
			major: "Computer Science and Mathematics",
		},
		{
			id: 2,
			full_name: "Kevin Do",
			photo_url: "image/upload/v1694568767/yh4btwumgmxla3c0sgcc.jpg",
			facebook: "https://www.facebook.com/profile.php?id=100087135307066",
			instagram: "https://www.instagram.com/jp.nguyennn",
			year: 2025,
			major: "Computer Science and Mathematics",
		},
	];
}

export default async function InternDatabase() {
	const data = await getData();

	return (
		<div>
			<h1>Edit Interns Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
