import React, { PropTypes } from 'react';
import VideoListRow from './VideoListRow';

const VideoList = ({videos}) => {
	return (
		<table className="table">
			<thead>
			<tr>
				<th>&nbsp;</th>
				<th>Name</th>
				<th>Age</th>
			</tr>
			</thead>
			<tbody>
			{videos.map(video =>
				<VideoListRow key={video.id} video={video}/>
			)}
			</tbody>
		</table>
	)
}

VideoList.propTypes = {
	videos: PropTypes.array.isRequired
};

export default VideoList;
