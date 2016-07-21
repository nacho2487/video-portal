import types from './actionTypes';

const signInFailed = (error) => {
  return { type: types.SIGIN_IN_FAILED, error};
};

const signInSuccess = (username, sessionId) => {
  return {type: types.SIGN_IN, username, sessionId};
};

const signOutSuccess = () => {
  return {type: types.SIGN_OUT};
};

const signIn = (creds) => {
  return (dispatch, getState, api) => {
    return api.signIn(creds).then((res) => {
      const {status, sessionId, username, error} = res.data;
      if (status === 'success') {
        dispatch(signInSuccess(username, sessionId));
      } else {
        dispatch(signInFailed(error));
      }
    }).catch((e) => {
      throw e;
    });
  };
};

const signOut = () => {
  return (dispatch, getState, api) => {
    return api.signOut().then((res) => {
      const {status} = res.data;
      if (status === 'success') {
        dispatch(signOutSuccess());
      }
    }).catch((e) => {
      throw e;
    });
  };
};

const changeCredential = (delta) => {
  return {
    type: types.CHANGE_CREDENTIAL,
    delta
  };
};


export {signIn, signOut, changeCredential, signInSuccess, signInFailed, signOutSuccess};
