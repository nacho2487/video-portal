import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideosList from './VideoList';


class VideosPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
		if(sessionStorage.getItem('sessionId') ){
			this.props.actions.loadVideos({skip: 0, limit: 10});
		}
	}
	
	render() {

		return (
			<div className="row">
				<VideosList {...this.props}/>
			</div>
		);
	}
}

VideosPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage);
