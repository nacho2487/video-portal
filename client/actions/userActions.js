import types from './actionTypes';
import request from 'axios';
import md5 from 'crypto-js/md5';
import {browserHistory} from 'react-router';

const signInFailed = (dispatch)=> {
  dispatch({
    type: types.SIGIN_IN_FAILED
  });
};

const signIn = (creds) => {
  return (dispatch) => {
    return request.post({
      username: creds.userName,
      password: md5(creds.password)
    }).then((res) => {
      if (res && res.status === 'success') {
        sessionStorage.setItem('sessionId', res.sessionId);
        dispatch({
          type: types.SIGN_IN,
          user: res.username
        });
        browserHistory.push('/');
      } else {
        signInFailed(dispatch);
      }
    }).catch((e) => {
      signInFailed(dispatch);
    });
  }
};

const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: types.SIGN_OUT
    });
    browserHistory.push('/login');
  };
}

const redirectToSignIn = () => {
  return () => {
    browserHistory.push('/login');
  };
}

const changeCredential = (delta) => {
  return {
    type: types.CHANGE_CREDENTIAL,
    delta
  };
};

const closeToastr = ()=> {
  return {
    type: types.SIGN_IN_FORM_RESET
  };
};

export {signIn, signOut, changeCredential, redirectToSignIn, closeToastr};
