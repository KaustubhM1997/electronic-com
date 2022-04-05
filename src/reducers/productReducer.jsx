// defining the product reducer here

import { initialFilters } from "../contexts/productListing-context";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortItemsBy: action.payload };
    case "FILTER_BY_RATINGS":
      return { ...state, rateBy: action.payload };
    case "IN_STOCK":
      return { ...state, inStock: action.payload };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: action.payload };
    case "CATEGORY":
      const categoryExist = state.category.includes(action.payload); //this stores the payload fired by the user
      console.log(action.payload, "here");

      return categoryExist
        ? {
            ...state,
            category: state.category.filter((item) => item !== action.payload), // to uncheck the category if clicked again
          }
        : { ...state, category: [...state.category, action.payload] }; //if the item checked already checked is not the same as the new item fired then we add it or it get selected.
    // in order to select multiple filters we just take an array and add any new filter to the ones already present by spreading them. We also put a condition to uncheck the ones that are selected

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload }; // we don't need the state here as we don't want to add anything there. We just need the price range selected by user, hence we pass the payload directly.

    case "CLEAR":
      return initialFilters;
  }
};

export { productReducer };
