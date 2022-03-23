 import {initialFilters} from "../../src/utils/initialFilters"
 
 
 // defining the product reducer here

 const productReducer = (state, action) => {
    // console.log(action);

    // console.log(action.payload)
    switch (action.type) {
      case "SORT":
        return { ...state, sortItemsBy: action.payload };
      case "FILTER_BY_RATINGS":
        return { ...state, rateBy: action.payload };
      case "IN_STOCK":
          return {...state, inStock: action.payload}
      case "FAST_DELIVERY":
        return {...state, fastDelivery: action.payload}
      case "CATEGORY":
        const categoryExist = state.category.includes(action.payload)

        // console.log(categoryExist, "hi");
        return categoryExist ? {...state, category: state.category.filter(item => item !== action.payload)}: {...state, category: [...state.category, action.payload]}
        // return{...state, category: [...state.category, action.payload]} // in order to select multiple filters we just take an array and add any new filter to the ones already present by spreading them.

        case "PRICE_RANGE":

          // console.log(action.payload, state.priceRange, 'here')
          return {...state, priceRange: action.payload} // we don't need the state here as we don't want to add anything there. We just need the price range selected by user, hence we pass the payload directly.

        case "CLEAR":
          return initialFilters;
    }
  };

  export {productReducer}
