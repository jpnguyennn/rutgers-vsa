import "@/styles/upcoming.css";
import Image from "next/image";
import Link from "next/link";

const UpcomingMain = ({
	pic,
	event,
	post,
	date,
}: {
	pic: string;
	event: string;
	post: string;
	date: string;
}) => {
	return (
		<div>
			<div
				className="m-12 p-12 overflow-hidden justify-center items-center grid"
				id="main_container"
			>
				<p className="text-[2rem] italic mb-4">{date}</p>
				<div className="" id="img_container_main">
					<img
						src={`https://res.cloudinary.com/rutgers-vsa/${pic}`}
						alt={event}
						className="rounded-[20px]"
					/>
				</div>
				<div className="m-4" id="text_container">
					<h1 className="font-titles">{event}</h1>
					<Link href={post} target="_blank">
						<h3
							className="mt-4 opacity-50 text-black no-underline hover:text-blue hover:underline hover:opacity-100"
							id="post_link"
						>
							CLICK HERE TO SEE IG POST
						</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UpcomingMain;
