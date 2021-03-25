import * as actionTypes from './actionTypes';
import axios from 'axios';

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};


export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

const catchExpirationTime = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const authenticate = (email, password, checkInMethod) => {
  return dispatch => {
    let url;
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    if(checkInMethod === "signup") {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtzMxqpghWrzubBxTbbtCGjhZhALYKkZQ";
    }
    if(checkInMethod === "login") {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtzMxqpghWrzubBxTbbtCGjhZhALYKkZQ";
    }
    axios.post(url, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);

        dispatch(authSuccess(response.data.idToken, response.data.localId));

        dispatch(catchExpirationTime(response.data.expiresIn))
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error))
      })
  }
}

export const authCheckStatus = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if(!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if(expirationDate > new Date()) {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(catchExpirationTime((expirationDate.getTime() - new Date().getTime()) / 1000))
      } else {
        dispatch(authLogout());
      }
    }
  }
}