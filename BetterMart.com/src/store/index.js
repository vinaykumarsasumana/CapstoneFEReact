import { createStore } from "redux";

const initialState = { loggedIn: false, userDetails: {}, cartItems: [] };

const storeReducer = (state = initialState, action) => {
  //LOGIN
  if (action.type === "checkStatus") {
    return {
      loggedIn: state.loggedIn,
      userDetails: state.userDetails,
      cartItems: state.cartItems,
    };
  }
  if (action.type === "setLogin") {
    return {
      loggedIn: (state.loggedIn = true),
      userDetails: state.userDetails,
      cartItems: state.cartItems,
    };
  }
  if (action.type === "clearLogin") {
    return {
      loggedIn: (state.loggedIn = false),
      userDetails: (state.userDetails = {}),
      cartItems: state.cartItems,
    };
  }
  //USER
  if (action.type === "addUserDetails") {
    return {
      userDetails: (state.userDetails = action.userDetails),
      loggedIn: state.loggedIn,

      cartItems: state.cartItems,
    };
  }
  if (action.type === "clearUserDetails") {
    return {
      userDetails: (state.userDetails = {}),
      loggedIn: state.loggedIn,

      cartItems: state.cartItems,
    };
  }
  //CART

  if (action.type === "addCartItems") {
    return {
      cartItems: (state.cartItems = action.cartItems),
      loggedIn: state.loggedIn,
      userDetails: state.userDetails,
    };
  }
  if (action.type === "clearCartItems") {
    return {
      cartItems: (state.cartItems = []),
      loggedIn: state.loggedIn,
      userDetails: state.userDetails,
    };
  }
  return state;
};
// const loginReducer = (state = { loggedIn: false }, action) => {
//   if (action.type === "checkLoginStatus") {
//     return {
//       loggedIn: state.loggedIn,
//     };
//   }
//   if (action.type === "setLogin") {
//     return {
//       loggedIn: (state.loggedIn = true),
//     };
//   }
//   if (action.type === "clearLogin") {
//     return {
//       loggedIn: (state.loggedIn = false),
//     };
//   }
//   return state;
// };
// const userReducer = (state = { userDetails: {} }, action) => {
//   if (action.type === "checkUserDetails") {
//     return {
//       userDetails: state.userDetails,
//     };
//   }
//   if (action.type === "addUserDetails") {
//     return {
//       userDetails: (state.userDetails = action.userDetails),
//     };
//   }
//   if (action.type === "clearUserDetails") {
//     return {
//       userDetails: (state.userDetails = {}),
//     };
//   }
//   return state;
// };
// const cartReducer = (state = { cartItems: [] }, action) => {
//   if (action.type === "getCartItems") {
//     return {
//       cartItems: state.cartItems,
//     };
//   }
//   if (action.type === "addCartItems") {
//     return {
//       cartItems: (state.cartItems = action.item),
//     };
//   }
//   if (action.type === "clearCartItems") {
//     return {
//       cartItems: (state.cartItems = []),
//     };
//   }
//   return state;
// };

// const store = createStore(loginReducer);
const store = createStore(storeReducer);

export default store;
