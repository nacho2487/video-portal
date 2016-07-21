import {combineReducers} from 'redux';
import {videos, video} from './videoReducer';
import user from './userReducer';
const rootReducer = combineReducers({
    videos,
    video,
    user
});

export default rootReducer;
