import { Intern, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Intern[]> {
	const interns = await fetch("http://ruvsa.vercel.app/api/interns", {
		next: { revalidate: 1 },
	});

	return interns.json();
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
