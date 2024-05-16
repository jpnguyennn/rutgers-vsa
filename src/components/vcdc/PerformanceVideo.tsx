const PerformanceVideo = ({ title, thumbnails, resourceId, medium }) => {
	return (
		<div className="my-4">
			<a
				href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
				target="_blank"
				className=""
			>
				<div id="left-column">
					<img
						width={medium.width * 1.05}
						height={medium.height * 1.05}
						src={medium.url}
						alt=""
						className="m-auto"
					/>
				</div>
				<div className="mt-4" id="right-column">
					<h2>{title}</h2>
				</div>
			</a>
		</div>
	);
};

export default PerformanceVideo;
