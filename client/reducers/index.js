import {combineReducers} from 'redux';
import videos from './videoReducer';
import user from './userReducer';
const rootReducer = combineReducers({
  videos,
  user
});

export default rootReducer;
