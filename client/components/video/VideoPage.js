import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideosList from './VideoList';

class VideoPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}


	render() {
		const {videos} = this.props;

		return (
			<div>
				<h1>Videos</h1>
				<VideosList persons={videos}/>
			</div>
		);
	}
}

VideoPage.propTypes = {
	videos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(videoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
