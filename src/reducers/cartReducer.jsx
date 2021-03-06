const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        return { ...state, cartlist: action.payload };
      }
      default:
        return state;
    }
  };

  export {cartReducer};