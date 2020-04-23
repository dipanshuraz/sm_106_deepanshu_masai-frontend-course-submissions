export const INCREMENT_COUNTER = "INCREMENT_COUNTER"; // rxc
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const INCREMENT_EVEN_ODD = "INCREMENT_EVEN_ODD";
export const MULTIPLY = "MULTIPLY";
export const DIVIDEBY = "DIVIDEBY";
export const REMAINDER = "REMAINDER";

// rxa

export const incrementCounter = payload => {
  // console.log(payload);
  return { type: INCREMENT_COUNTER, payload };
};

export const decrementCounter = payload => ({
  type: DECREMENT_COUNTER,
  payload
});

export const incrementEvenOdd = payload => {
  // console.log(payload);
  return { type: INCREMENT_EVEN_ODD, payload };
};
export const multiplyby = payload => {
  return { type: MULTIPLY, payload };
};
export const divideby = payload => ({
  type: DIVIDEBY,
  payload
});
export const remainder = payload => ({
  type: REMAINDER,
  payload
});
