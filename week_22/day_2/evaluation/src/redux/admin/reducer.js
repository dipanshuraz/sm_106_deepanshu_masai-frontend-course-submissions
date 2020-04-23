import { ADD_PRODUCT } from "./action";

const initialState = {
  items: []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(state.items);
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};

export default adminReducer;
