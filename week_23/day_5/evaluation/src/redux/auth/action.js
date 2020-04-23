import axios from 'axios'

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
  REG_USER_FAIL,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,

} from "./actionTypes";

export const regUserReq = payload => ({
  type: REG_USER_REQUEST,
  payload
});

export const regUserSuccess = payload => ({
  type: REG_USER_SUCCESS,
  payload
});

export const regUserFailed = payload => ({
  type: REG_USER_FAIL,
  payload
});

export const regUser = payload => dispatch => {
  dispatch(regUserReq());
  axios({
    url: "http://localhost:8080/auth/register",
    data: payload,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => dispatch(regUserSuccess(res.data.message)))
    .catch(err => dispatch(regUserFailed(err.message)));
};

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});

export const loginUser = payload => dispatch => {
  dispatch(loginUserRequest());
  axios({
    url: "http://localhost:8080/auth/login",
    data: payload,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      dispatch(loginUserSuccess({
        token: res.data.token,
        username: payload.username
      }));
    })
    .catch(() => dispatch(loginUserFailure()));
};


export const logoutUserRequest = payload => ({
  type: LOGOUT_USER_REQUEST,
  payload
});

export const logoutUserSuccess = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};


export const authUserReq = (payload) => ({
  type: USER_AUTH_REQUEST,
  payload
})

export const authUserSuccess = (payload) => ({
  type: USER_AUTH_SUCCESS,
  payload
})

export const authUserFail = (payload) => ({
  type: USER_AUTH_FAILURE,
  payload
})

export const authUser = (payload) => dispatch => {
  let token = localStorage.getItem('token')
  token = JSON.parse(token)
  let username = localStorage.getItem('username')
  username = JSON.parse(username)

  dispatch(authUserReq())
  axios(
    {
      url: `http://localhost:8080/user/${username}`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => {

      dispatch(authUserSuccess(res.data))
    })
    .catch(err => console.log(err))
}