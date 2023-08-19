import "@/styles/upcoming.css";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
	link: string;
}

function PostExists({ link }: { link: string }) {
	if (link == "") return <></>;
	else
		return (
			<Link href={link} target="_blank">
				<h3
					className="opacity-50 text-black no-underline hover:text-blue hover:underline hover:opacity-100"
					id="post_link"
				>
					CLICK HERE TO SEE IG POST
				</h3>
			</Link>
		);
}

const UpcomingEvent = ({
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
		<>
			<div
				className="m-12 p-7 flex min-w-[75rem] relative justify-center items-center border-b-2 border-[rgb(226,163,91,0.5)] border-double border-l-0 border-r-0 min-h-[10rem]"
				id="add_container"
			>
				<div className="" id="img_container">
					<Image
						src={`https://res.cloudinary.com/rutgers-vsa/${pic}`}
						alt={event}
						width={200}
						height={200}
						className="rounded-[20px]"
					/>
				</div>
				<div className="m-8" id="text_container">
					<p className="">{date}</p>
					<h1 className="font-titles m-4 ml-0">{event}</h1>
					<PostExists link={post} />
				</div>
			</div>
		</>
	);
};

export default UpcomingEvent;
