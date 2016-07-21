import React, { PropTypes } from 'react';
import Video from './Video';

class VideoList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			skipBy: 10,
			limit: 10
		};
		this.timer = null;
		this.onScroll = this.onScroll.bind(this);
	}
	componentDidMount(){
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount(){
		this.props.actions.clearVideos();
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll() {
		let that = this;
		if(this.timer !== null) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(function() {
			that.props.actions.loadVideos({skip: that.state.skipBy, limit: that.state.limit});
			that.setState({
				skipBy: that.state.skipBy + 10
			});
		}, 1000);
	}
	
	render(){
		const {videos, actions, fullRow} = this.props;
		return (
			<div>
				{videos.map((video, index) =>
					<div key={index} className={fullRow ? 'col-sm-12 video-col' : 'col-sm-3 video-col'}>
						<Video onClickStar={actions.clickStar} key={index} video={video}/>
					</div>
				)}
			</div>
		);
	}
}

VideoList.propTypes = {
	videos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	fullRow: PropTypes.bool
};

export default VideoList;
