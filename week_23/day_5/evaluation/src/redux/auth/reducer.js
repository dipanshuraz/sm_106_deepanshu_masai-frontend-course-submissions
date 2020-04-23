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

const initState = {
  isAuth: false,
  isLoading: true,
  error: '',
  resMes: '',
  user: {},

};

const reducer = (state = initState, action) => {

  switch (action.type) {
    case LOGIN_USER_REQUEST:
      console.log('user req')
      return {
        isLoading: true,
        error: false
      };
    case LOGIN_USER_SUCCESS:

      let token = JSON.stringify(action.payload.token)
      localStorage.setItem('token', token)

      let username = JSON.stringify(action.payload.username)
      localStorage.setItem('username', username)

      return {
        isLoading: false,
        isAuth: true
      };

    case LOGIN_USER_FAILURE:
      console.log(action.payload)
      return {
        isLoading: false,
        error: action.payload
      };
    case LOGOUT_USER_REQUEST:
      return {
        isLoading: false,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        isAuth: false
      };
    case LOGOUT_USER_FAILURE:
      return {
        isLoading: false,
        error: action.payload
      };
    case REG_USER_REQUEST:
      return {
        isLoading: true
      };
    case REG_USER_SUCCESS:
      console.log(action.payload)
      return {
        isLoading: false,
        resMes: action.payload
      };
    case REG_USER_FAIL:
      return {
        isLoading: false,
        resMes: action.payload
      };

    case USER_AUTH_REQUEST:
      console.log('user auth req')
      return {
        isLoading: true
      }
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload
      }
    case USER_AUTH_FAILURE:
      console.log('user auth err')
      return {
        isLoading: false,
      }
    default:
      return state;
  }
};

export default reducer;
