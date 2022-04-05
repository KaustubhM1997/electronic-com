import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

// this is where the filters would go back on clear

const initialFilters = {
  sortItemsBy: null,
  rateBy: null,
  inStock: false,
  fastDelivery: false,
  category: [], // we pass an empty array here so that multiple categories can be put in an array (MEN, Women, Kids, etc..) (for us to be able to select multiple categories)
  priceRange: 1990,
};



const ProductListing = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialFilters);

  return (
    <ProductListing.Provider value={{ state, dispatch }}>
      {children}
    </ProductListing.Provider>
  );
};

const useProductListing = () => useContext(ProductListing);

export { useProductListing, ProductProvider, initialFilters };
