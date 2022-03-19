import "../Home/home.css";
import React from "react";
import { Nav } from "../../components/Nav/nav";
import "./product-listing.css";
import { Footer } from "../../components/Footer/footer";

const ProductListing = () => {
  return (
    <>
      <Nav />

      <div className="sub-heading title">
        <h2 className="h2">Shop by Category</h2>
      </div>

      {/* <h1>Product Listing</h1> */}

      {/* <Footer/> */}
    </>
  );
};

export { ProductListing };
