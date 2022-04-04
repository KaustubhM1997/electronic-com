const wishListReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_WISHLIST":
      return { ...state, wishlist: action.payload }; // we can do this using useState as well as there's just one action type
  }
};

export { wishListReducer };
