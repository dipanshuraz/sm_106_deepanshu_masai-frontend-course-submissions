export const ADD_PRODUCT = "ADD_PRODUCT";

export const addProd = payload => {
  return { type: ADD_PRODUCT, payload };
};

// export const ADD_PRODUCT = "ADD_PRODUCT";

// export const addProd = payload => {
//   let items = [];
//   if (!localStorage.getItem("items")) {
//     items = [];
//   } else {
//     items = JSON.parse(localStorage.getItem("items"));
//     items.push(payload);
//     localStorage.setItem(JSON.stringify(items));
//   }

//   return { type: ADD_PRODUCT, items };
// };
