import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
import { ProductListing } from "../src/pages/Product-listing/product-listing";
import { Wishlist } from "./pages/Wishlist/wishlist";
import { Cart } from "./pages/Cart/cart";
import { Login } from "./pages/Login/login";
import { Nav } from "../src/components/Nav/nav";
import { Footer } from "../src/components/Footer/footer";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-listing" element={<ProductListing />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/cart-management" element={<Cart />}></Route>
      <Route path="/login-page" element={<Login />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
