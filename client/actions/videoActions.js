import request from 'axios';
import * as types from './actionTypes';

function loadVideosSuccess(videos){
	return { type: types.LOAD_VIDEOS_SUCCESS, videos };
}
export function loadVideos(){
	return function(dispatch){
		return request.get('/videos').then(res => {
			dispatch(loadVideosSuccess(res.body));
		});
	};

}
