import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import Video from './Video';
import VideoList from './VideoList';

class VideoPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        if(sessionStorage.getItem('sessionId') ){
            this.props.actions.getVideo(this.props.params.id);
            this.props.actions.loadVideos({skip: 0,limit: 10});
        }
    }

    componentWillReceiveProps(nextProps){
        if(sessionStorage.getItem('sessionId') &&  this.props.params.id !== nextProps.params.id){
            this.props.actions.clearVideos();
            this.props.actions.getVideo(nextProps.params.id);
            this.props.actions.loadVideos({skip: 0, limit: 10});
        }
    }


    render() {
        const {video, videos, actions} = this.props;

        return (
            <div className="row">
                <div className="col-sm-9">
                    <Video onClickStar={actions.clickStar} video={video}/>
                </div>
                <div className="col-sm-3">
                    <VideoList actions={actions} videos={videos} fullRow/>
                </div>
            </div>
        );
    }
}

VideoPage.propTypes = {
    video: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        video: state.video,
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(videoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
