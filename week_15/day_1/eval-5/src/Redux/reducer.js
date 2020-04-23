import { ADD_TOPIC, DELETE_TOPIC, IS_AUTH } from "./action";

const initialState = {
  data: [],
  isAuth: false,
  username: "admin",
  password: "admin"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      console.log(state.data);
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case DELETE_TOPIC:
      return {
        ...state,
        data: (state.data.filter = (item, index) => {
          if (index != action.payload) return item;
        })
      };
    case IS_AUTH:
      if (
        state.username == action.payload.userName &&
        state.password == action.payload.password
      ) {
        console.log("#");
        return {
          ...state,
          isAuth: true
        };
      }
    default:
      return state;
  }
};

export default reducer;
