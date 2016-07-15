import React, { PropTypes } from 'react';

const VideoListRow = ({video}) => {
	return (
		<tr>
			<td>
				{video.name}
			</td>
		</tr>
	)
}
VideoListRow.propTypes = {
	video: PropTypes.object.isRequired
};
export default VideoListRow;
