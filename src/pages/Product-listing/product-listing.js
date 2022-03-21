import React from "react";
import "../Home/home.css";
import "./product-listing.css";
import { Aside } from "../../components/Aside/aside";
import { useProduct } from "../../contexts/product-context";
import { ProductCard } from "../../components/Product-card/product-card";

const ProductListing = () => {
  const { products, error } = useProduct();

  // console.log(products);

  // products.map((item) => console.log(item.title))

  // const [title, price, rating] = products;
  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Filters with aside tag --> */}

        <Aside />

        {/* <!-- Product Listing - Main  --> */}

        <main className="item-container">
          <div className="item-heading">
            <h3>Show All Products</h3>

            <p>(Showing 10 Products)</p>
          </div>

          <div className="item-list">
            {products.map((item) => (
              <ProductCard  key = {item._id} productcard={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductListing };
