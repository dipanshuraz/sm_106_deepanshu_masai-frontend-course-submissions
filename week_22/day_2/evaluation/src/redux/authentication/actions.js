import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
  REG_USER_FAIL
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";

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
    .then(res => console.log(res))
    .catch(err => console.log(err));
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

export const loginUser = payload => {
  console.log(payload);
  return dispatch => {
    dispatch(loginUserRequest());
    return axios({
      url: "http://localhost:8080/auth/login",
      data: payload,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(loginUserSuccess(res.statusText));
      })
      .catch(() => dispatch(loginUserFailure()));
  };
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
