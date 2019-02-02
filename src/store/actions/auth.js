import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  }
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}



export const auth = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    const API_KEY = `AIzaSyAvTaAKJB9xsvuGV0Lpn963TUVBsF_nG_I`;
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;

    const authData = {
      email: username,
      password: password,
      returnSecureToken: true
    }

    axios.post(url, authData)
    .then(response => {
      console.log(response);
      dispatch(authSuccess(response.data.idToken, response.data.localId ));
    })
    .catch(err => {
      console.log(err);
      // dispatch(authFail(err.response.data.error.message));
    });

  }
}
