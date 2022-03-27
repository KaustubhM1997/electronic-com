import "../App.css";
import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ProductListing } from "../pages/Product-listing/product-listing";
import { Wishlist } from "../pages/Wishlist/wishlist";
import { Cart } from "../pages/Cart/cart";
import { Login } from "../pages/Login/login";
import { Signup } from "../pages/Signup/signup";
import Mockman from "mockman-js";
import "../Routes/routes.css"


const ParentRouter = () => {
  return (
    <div className="parent-routes">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-listing" element={<ProductListing />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/cart-management" element={<Cart />}></Route>
      <Route path="/login-page" element={<Login />}></Route>
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/signup-page" element = {<Signup/>} ></Route>
    </Routes>
    </div>
  );
};

export { ParentRouter };
