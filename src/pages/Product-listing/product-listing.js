import React from "react";
import "../Home/home.css";
import "./product-listing.css";
import { Aside } from "../../components/Aside/aside";
import { useProduct } from "../../contexts/datafetch-context";
import { ProductCard } from "../../components/Product-card/product-card";
import {priceRangeItems} from "../../utils/sortByPriceRange"

const ProductListing = () => {
  const { products, error } = useProduct();

  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Filters with aside tag --> */}

        <Aside dispatch={dispatch} state={state} /> 

        {/* In the above line, we pass the object keys dispatch and state to other pages (here we've passed to aside) */}

        {/* // You can communicate between two files  */}

        {/* <!-- Product Listing - Main  --> */}

        <main className="item-container">
          <div className="item-heading">
            <h3>Show All Products</h3>

            <p>(Showing {priceRangeItems.length} Products of {products.length} Products)</p>
          </div>

          <div className="item-list">
            {priceRangeItems.map((item) => (
              <ProductCard key={item._id} productcard={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductListing };
