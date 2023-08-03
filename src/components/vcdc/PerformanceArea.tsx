import Youtube, { YouTubeProps } from "react-youtube";
import PerformanceVideo from "./PerformanceVideo";

async function getPerformanceData() {
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLpk-GWLWHFtb1IyhR77yaVwoAJWN6HSDh&key=${process.env.YOUTUBE_API_KEY}`
	);
	return response.json();
}

export default async function PerformanceArea() {
	const performanceData = await getPerformanceData();

	return (
		<div className="m-[auto] items-center justify-center">
			{performanceData.items.map(({ id, snippet }) => {
				const { title, thumbnails, resourceId } = snippet;
				const { medium } = thumbnails;
				return (
					<PerformanceVideo
						key={id}
						title={title}
						thumbnails={thumbnails}
						resourceId={resourceId}
						medium={medium}
					/>
				);
			})}
		</div>
	);
}
