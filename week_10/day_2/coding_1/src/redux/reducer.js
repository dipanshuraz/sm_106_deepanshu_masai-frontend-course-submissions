import {
  ADD_TODO,
  COMPLETE_TODO,
  TRASH_TODO,
  COMPLETE_TO_TRASH,
  ALL_CLEAR
} from "./action";

const initialState = {
  todoArr: [],
  completeTodo: [],
  trashTodo: []
};

const reducer = (state = initialState, action) => {
  // console.log(state);

  switch (action.type) {
    case ADD_TODO:
      // console.log(action.payload);
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload]
      };
    case COMPLETE_TODO:
      let id = action.payload;
      let target = state.todoArr.filter((elem, i) => i == id);
      state.todoArr = state.todoArr.filter((elem, i) => i != id);

      // console.log(target);
      // console.log(state.completeTodo);
      // console.log(state.todoArr);
      return {
        ...state,
        completeTodo: [...state.completeTodo, target[0]]
      };
    case TRASH_TODO:
      let index = action.payload;
      let trashTask = state.todoArr.filter((elem, i) => i == index);
      state.todoArr = state.todoArr.filter((elem, i) => i != index);

      // console.log(trashTask);
      // console.log(state.trashTodo);
      return {
        ...state,
        trashTodo: [...state.trashTodo, trashTask[0]]
      };
    case COMPLETE_TO_TRASH:
      let ind = action.payload;
      let compToDel = state.completeTodo.filter((elem, i) => i == ind);
      state.completeTodo = state.completeTodo.filter((elem, i) => i != ind);
      console.log(compToDel);
      console.log(state.completeTodo);

      return {
        ...state,
        trashTodo: [...state.trashTodo, compToDel[0]]
      };
    case ALL_CLEAR:
      return {
        ...state,
        trashTodo: []
      };
    default:
      return state;
  }
};
export default reducer;
