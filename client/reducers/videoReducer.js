import initialState from './initialState';
import types from '../actions/actionTypes';

export function videos(state = initialState.videos, action){
	switch(action.type) {
		case types.LOAD_VIDEOS_SUCCESS:
			return state.concat(action.videos);
		case types.RATING_SUCCESS:
			return state.map(v => video(v, action));
		case types.CLEAR_VIDEOS:
			return [];
		default:
			return state;
	}
}

export function video(state = initialState.video, action){
	switch(action.type) {
		case types.VIDEO_SUCCESS:
			return Object.assign({}, state, action.video);
		case types.RATING_SUCCESS:
			if(state._id !== action.video._id){
				return state;
			}
			return Object.assign({}, state, action.video);
		default:
			return state;
	}
}
