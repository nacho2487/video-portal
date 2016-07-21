import request from 'axios';
import types from './actionTypes';

export function ratingSuccess(video){
	return { type: types.RATING_SUCCESS, video };
}

export function ratingError(){
	return { type: types.RATING_ERROR };
}

export function getVideoSuccess(video){
	return { type: types.VIDEO_SUCCESS, video };
}

export function getVideoError(){
	return { type: types.VIDEO_ERROR };
}

export function loadVideosSuccess(videos){
	return { type: types.LOAD_VIDEOS_SUCCESS, videos };
}

export function loadVideosError(){
	return { type: types.LOAD_VIDEOS_ERROR };
}

export function clearVideosSuccess(){
	return {type: types.CLEAR_VIDEOS};
}

export function clearVideos(){
	return function(dispatch) {
		return dispatch(clearVideosSuccess());
	};
}

export function loadVideos({limit, skip}){
	return function(dispatch, getState, api){
		return api.getVideos(skip, limit).then(res => {
			const {status, data} = res.data;
			if (status === 'success') {
				dispatch(loadVideosSuccess(data));
			} else{
				dispatch(loadVideosError());
			}
		}).catch(error => {
			throw(error);
		});
	};
}

export function getVideo(videoId){
	return function(dispatch, getState, api){
		return api.getVideo(videoId).then(res => {
			const {status, data} = res.data;
			if (status === 'success') {
				dispatch(getVideoSuccess(data));
			} else{
				dispatch(getVideoError());
			}
		}).catch(error => {
			throw(error);
		});
	};
}

export function clickStar(id, rating){
	return function(dispatch, getState, api){
		return api.rateVideo(id, rating).then(res => {
			const {status, data} = res.data;
			if (status === 'success') {
				dispatch(ratingSuccess(data));
			} else{
				dispatch(ratingError());
			}
		}).catch(error => {
			throw(error);
		});
	};
}
