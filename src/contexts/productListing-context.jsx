import { createContext, useContext } from "react/cjs/react.production.min";
import { productReducer } from "../reducers/productReducer";
import { useReducer } from "react";
import { Aside } from "../components/Aside/aside";

const ProductListing = createContext(null);


const ProductProvider = ({children}) => {

  
//Defining the reducer

const [state, dispatch] = useReducer(productReducer, initialFilters);

    return (

        <ProductListing.Provider value = {{state, dispatch}}>
            {children}
        </ProductListing.Provider>
    )
}

const useProductListing = () => useContext(ProductListing);


export {useProductListing, ProductProvider}