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
				className="m-12 p-12 justify-center content-center overflow-hidden flex text-left"
				id="main_container"
			>
				<div className="flex-none" id="img_container_main">
					<img
						src={`https://res.cloudinary.com/rutgers-vsa/${pic}`}
						alt={event}
						className="rounded-[5px]"
					/>
				</div>
				<div className="mr-auto" id="text_container">
					<h1 className="font-titles">{event}</h1>
					<p className="text-[1.75rem] italic mb-4">{date}</p>
					<p className="w-auto">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
						feugiat nisl pretium fusce id velit ut tortor. Sit amet massa vitae
						tortor condimentum lacinia quis vel. Lacus sed viverra tellus in hac
						habitasse platea. Maecenas accumsan lacus vel facilisis volutpat est
						velit. Amet justo donec enim diam vulputate ut. Orci nulla
						pellentesque dignissim enim sit amet. Morbi tincidunt augue interdum
						velit. Nam at lectus urna duis convallis convallis. Quis blandit
						turpis cursus in hac habitasse platea dictumst. Mus mauris vitae
						ultricies leo integer malesuada nunc. Consequat semper viverra nam
						libero justo laoreet sit. Ultrices gravida dictum fusce ut placerat.
						Morbi tempus iaculis urna id volutpat lacus laoreet non. Tristique
						magna sit amet purus gravida quis blandit turpis cursus. Tincidunt
						id aliquet risus feugiat in ante metus. Pellentesque id nibh tortor
						id aliquet lectus. Netus et malesuada fames ac. Convallis posuere
						morbi leo urna molestie at elementum. Convallis a cras semper auctor
						neque. Natoque penatibus et magnis dis parturient montes nascetur
						ridiculus mus. Ligula ullamcorper malesuada proin libero nunc. Et
						molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
						Et leo duis ut diam quam. Nunc pulvinar sapien et ligula
						ullamcorper. In hac habitasse platea dictumst vestibulum rhoncus
						est. Viverra nibh cras pulvinar mattis nunc. Enim sed faucibus
						turpis in. Dui ut ornare lectus sit amet est. Volutpat diam ut
						venenatis tellus in metus. Id interdum velit laoreet id donec
						ultrices. Nunc sed blandit libero volutpat.
					</p>
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
