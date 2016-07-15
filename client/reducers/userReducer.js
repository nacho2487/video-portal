import userActionConstants from '../actions/actionTypes';

const initialState = {
  username: 'Guest',
  isSignedIn: false,
  username: '',
  password: '',
  signInFailed: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case userActionConstants.SIGN_IN:
      const username = action.user;

      return Object.assign({}, state, {
        username: username,
        signInFailed: false,
        isSignedIn: true
      });
    case userActionConstants.SIGN_OUT:
      return Object.assign({}, state, initialState);
    case userActionConstants.SIGIN_IN_FAILED:
      return Object.assign({}, state, {signInFailed: true});
    case userActionConstants.CHANGE_CREDENTIAL:
      return Object.assign({}, state, {isSignedIn: false, signInFailed: false}, action.delta);
    default:
      return state;
  }
};

export default users;
