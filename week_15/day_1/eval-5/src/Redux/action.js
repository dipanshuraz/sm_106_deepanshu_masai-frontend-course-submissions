export const ADD_TOPIC = "ADD_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const IS_AUTH = "IS_AUTH";

export const addTopic = payload => ({
  type: ADD_TOPIC,
  payload
});

export const deleteTopic = payload => ({
  type: DELETE_TOPIC,
  payload
});

export const isAuth = payload => ({
  type: IS_AUTH,
  payload
});
