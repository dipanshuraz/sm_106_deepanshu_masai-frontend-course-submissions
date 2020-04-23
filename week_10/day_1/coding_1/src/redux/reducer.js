import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_EVEN_ODD,
  MULTIPLY,
  DIVIDEBY,
  REMAINDER
} from "./action";

const initialState = {
  count: 0,
  count2: 0
};

const reducer = (state = initialState, action) => {
  // console.log(state.count2);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + Number(action.payload)
      };
    case DECREMENT_COUNTER:
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - action.payload
        };
      } else {
        alert("0");
        return { ...state, count: 0 };
      }

    case INCREMENT_EVEN_ODD:
      if (action.payload % 2 == 0) {
        return {
          ...state,
          count2: state.count2 + 2
        };
      } else {
        return {
          ...state,
          count2: state.count2 + 1
        };
      }
    case MULTIPLY:
      return {
        ...state,
        count2: state.count2 * action.payload
      };
    case DIVIDEBY:
      return {
        ...state,
        count2: (state.count2 / action.payload).toFixed(3)
      };
    case REMAINDER: {
      return {
        ...state,
        count2: (state.count2 % action.payload).toFixed(0)
      };
    }
    default:
      return state;
  }
};

export default reducer;
