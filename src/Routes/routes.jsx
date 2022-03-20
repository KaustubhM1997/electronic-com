import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
import {ProductListing} from "../src/pages/Product-listing/product-listing"
import { Wishlist } from "./pages/Wishlist/wishlist";
import {Cart} from "./pages/Cart/cart"
import {Login} from "./pages/Login/login"


const ParentRouter = () => {


    return (

        <Routes>

        <Route path= "/" element = {<Home/>}></Route>
        <Route path = "/product-listing" element = {<ProductListing/>}></Route>
        <Route path = "/wishlist" element = {<Wishlist/>}></Route>
        <Route path = "/cart-management" element = {<Cart/>}></Route>
        <Route path = "/login-page" element = {<Login/>}></Route>
  
  
  
      </Routes>


    )
}

export {ParentRouter}