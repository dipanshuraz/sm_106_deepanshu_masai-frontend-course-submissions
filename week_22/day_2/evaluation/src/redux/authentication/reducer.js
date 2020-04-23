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

const initState = {
  isAuth: false,
  isLoading: true,
  error: false,
  user: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case LOGIN_USER_SUCCESS:
      if (action.payload == "OK") {
        return {
          isLoading: false,
          isAuth: true
        };
      }

    case LOGIN_USER_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case LOGOUT_USER_REQUEST:
      return {
        isLoading: false,
        error: false
      };
    case LOGOUT_USER_SUCCESS:
      return {
        isAuth: false
      };
    case LOGOUT_USER_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case REG_USER_REQUEST:
      return {};
    case REG_USER_SUCCESS:
      return {};
    case REG_USER_FAIL:
      return {};
    default:
      return state;
  }
};

export default reducer;
