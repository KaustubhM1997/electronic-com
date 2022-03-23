import { createContext, useContext } from "react/cjs/react.production.min";

const ProductListing = createContext(null);


const ProductProvider = ({children}) => {



    //put everything here after doing filters

    //move reducers to a separate folder




    return (

        <ProductListing>
            {children}
        </ProductListing>
    )
}

const useProductListing = () => useContext(ProductListing);


export {useProductListing, ProductProvider}