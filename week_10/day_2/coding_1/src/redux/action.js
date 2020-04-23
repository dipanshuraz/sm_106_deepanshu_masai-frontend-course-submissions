export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const TRASH_TODO = "TRASH_TODO";
export const COMPLETE_TO_TRASH = "COMPLETE_TO_TRASH";
export const ALL_CLEAR = "ALL_CLEAR";

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});
export const completeTodo = payload => ({
  type: COMPLETE_TODO,
  payload
});
export const trashTodo = payload => ({
  type: TRASH_TODO,
  payload
});

export const completeToTrash = payload => ({
  type: COMPLETE_TO_TRASH,
  payload
});

export const allClear = payload => ({
  type: ALL_CLEAR,
  payload
});
