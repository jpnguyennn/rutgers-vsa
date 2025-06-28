import { BoardSkeleton } from "../ui/skeleton";

export default function BoardLoading() {
	return (
		<div className="px-10">
			<div className="w-full items-center p-10 flex flex-wrap justify-center gap-10 place-content-center">
				<div className="w-full md:w-[calc(50%-0.5rem)] lg:mx-10 lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]">
					<BoardSkeleton className="h-[25px] w-full" />
					<BoardSkeleton className="h-[25px] w-full mt-2" />
					<BoardSkeleton className="h-[300px] w-full mt-10" />
				</div>
				<div className="w-full md:w-[calc(50%-0.5rem)] lg:mx-10 lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]">
					<BoardSkeleton className="h-[25px] w-full" />
					<BoardSkeleton className="h-[25px] w-full mt-2" />
					<BoardSkeleton className="h-[300px] w-full mt-10" />
				</div>
				<div className="w-full md:w-[calc(50%-0.5rem)] lg:mx-10 lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]">
					<BoardSkeleton className="h-[25px] w-full" />
					<BoardSkeleton className="h-[25px] w-full mt-2" />
					<BoardSkeleton className="h-[300px] w-full mt-10" />
				</div>
			</div>
		</div>
	);
}
