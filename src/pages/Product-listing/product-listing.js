import React from "react";
import "../Home/home.css";
import "./product-listing.css";
import { Aside } from "../../components/Aside/aside";
import { useProduct } from "../../contexts/datafetch-context";
import { ProductCard } from "../../components/Product-card/product-card";
import { useProductListing } from "../../contexts/productListing-context";
import {
  categoryItems,
  fastDeliveryItems,
  getSortedItems,
  priceRangeProducts,
  sortItemsByRating,
  inStockItems,
} from "../../utils/global-utils";

const ProductListing = () => {
  const { products } = useProduct();

  const { state } = useProductListing();

  //calling the functions from utils and passing arguments. Chaining the functions and mapping the last one

  const getSortedList = getSortedItems(products, state.sortItemsBy);

  const RatingItems = sortItemsByRating(getSortedList, state.rateBy);

  const inStockProducts = inStockItems(RatingItems, state.inStock);

  const fastDeliveryProducts = fastDeliveryItems(
    inStockProducts,
    state.fastDelivery
  ); //state.fastdelivery is what we get from the reducer and we render it here and then map the function to be shown in view

  const getCategoryItems = categoryItems(fastDeliveryProducts, state.category);

  const priceRangeItems = priceRangeProducts(
    getCategoryItems,
    state.priceRange
  );

  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Filters with aside component --> */}

        <Aside />

        {/* In the above line, we pass the object keys dispatch and state to other pages (here we've passed to aside) **Update:** we removed that now as we have a global context which we directlly pass to our aside component logic and destrcture the values from context provider.*/}

        {/* <!-- Product Listing - Main  --> */}

        <main className="item-container">
          <div className="item-heading">
            <h3>Show All Products</h3>

            <p>
              (Showing {priceRangeItems.length} Products of {products.length}{" "} 
              Products)
              {/* pricernageitems has all the filtered items and products is the initial products we fetched from db */}
            </p>
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
