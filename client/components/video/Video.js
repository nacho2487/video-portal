import React, { PropTypes } from 'react';
import StarRating from './StarRating';
import {browserHistory} from 'react-router';
class Video extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.goToVideo = this.goToVideo.bind(this);
	}
	componentDidMount(){
		const that = this;
		this.refs.video.addEventListener('play', function(){
			let allVideos = document.getElementsByTagName('video');
			for (let i = 0; i < allVideos.length; i++) {
				let video = allVideos[i];
				if(that.refs.video !== video){
					video.pause();
				}
			}
		}, false);
	}
	goToVideo(e){
		e.preventDefault();
		browserHistory.push(`/singleVideo/${this.props.video._id}`);

	}
	render(){
		const {video, onClickStar} = this.props;
		const starVideoId  = `star-${video._id}`;
		const videoUrl = `/${video.url}`;
		return (
			<div className="video">
				<a href="#" onClick={this.goToVideo} className="title"><strong>{video.name}</strong></a>
				<video ref="video" src={videoUrl} preload="none" width="100%" height="100%" controls />
				<StarRating key={starVideoId} videoId={video._id} onClickStar={onClickStar} ratings={video.ratings} />
				<p className="description">
					{video.description}
				</p>
			</div>
		);
	}

}
Video.propTypes = {
	video: PropTypes.object.isRequired,
	onClickStar: PropTypes.func.isRequired
};
export default Video;
