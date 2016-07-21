import userActionConstants from '../actions/actionTypes';

const initialState = {
  username: '',
  password: '',
  sessionId: '',
  isSignedIn: false,
  signInFailed: false,
  error: ''
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case userActionConstants.SIGN_IN:

      return Object.assign({}, state, {
        username: action.username,
        isSignedIn: true,
        sessionId: action.sessionId,
        error: ''
      });
    case userActionConstants.SIGN_OUT:
      return Object.assign({}, state, initialState, {logoutSuccess: true});
    case userActionConstants.SIGIN_IN_FAILED:
      return Object.assign({}, state, {isSignedIn: false, signInFailed: true, error: action.error});
    case userActionConstants.CHANGE_CREDENTIAL:
      return Object.assign({}, state, {isSignedIn: false, signInFailed: false, error: ''}, action.delta);
    default:
      return state;
  }
};

export default users;
