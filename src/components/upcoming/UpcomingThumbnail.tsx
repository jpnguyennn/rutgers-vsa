import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export const UpcomingThumbnail = ({ thumbnail_link, name }) => {
	return (
		<div className="m-10 min-h-full sticky justify-center items-center align-center">
			<div className="bg-white min-h-full p-8">
				<div className="sticky">
					<div className="relative">
						<AspectRatio ratio={1}>
							<Image
								src={thumbnail_link}
								fill={true}
								alt={name}
								className="z-10"
							/>
						</AspectRatio>
					</div>
				</div>
			</div>
		</div>
	);
};
