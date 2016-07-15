import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function testReducer(state = initialState.videos, action){
	switch(action.type) {
		case types.LOAD_VIDEOS_SUCCESS:
			return action.videos;
		default:
			return state;
	}
}
