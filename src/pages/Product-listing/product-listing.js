import React from "react";
import "../Home/home.css";
import "./product-listing.css";
import { Aside } from "../../components/Aside/aside";
import { useProduct } from "../../contexts/datafetch-context";
import { ProductCard } from "../../components/Product-card/product-card";
import { useReducer } from "react";

const ProductListing = () => {
  const { products, error } = useProduct();

  // this is where the filters would go back on clear

  const initialFilters = {
    sortItemsBy: null,
    rateBy: null,
    inStock: false,
    fastDelivery: false,
    // priceRange: 981
  };

  // defining the product reducer here

  const productReducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "SORT":
        // console.log("Kaus");
        return { ...state, sortItemsBy: action.payload };
      case "FILTER_BY_RATINGS":
        return { ...state, rateBy: action.payload };
      case "IN_STOCK":
          return {...state, inStock: action.payload}
      case "FAST_DELIVERY":
        return {...state, fastDelivery: action.payload}
    }
  };

  //Defining the reducer

  const [state, dispatch] = useReducer(productReducer, initialFilters);

  // Move this to util, function to sort by price

  const getSortedItems = (productData, sortItemsBy) => {
    if (sortItemsBy === "LOW_TO_HIGH") {
      return [...productData].sort((item1, item2) => {
        const price1 = item1.price - item2.price;
        return price1;
      });
    } else if (sortItemsBy === "HIGH_TO_LOW") {
      return [...productData].sort((item1, item2) => {
        const price2 = item2.price - item1.price; //the price here is what we get from the db
        return price2;
      });
    }
    return productData;
  };

  const getSortedList = getSortedItems(products, state.sortItemsBy); // 1

  //function for sorting items as per rating

  // console.log(state);

  const sortItemsByRating = (productData, rateBy) => {
    // if(rateBy === "4_STARS_AND_ABOVE"){

    // console.log(productData);
    // console.log(rateBy);

    return [...productData].filter((product) => product.rating >= rateBy); // rating is what we get from the db and the values of rateby we pass in the specific input elements. The payload we get when dispatch is fired and the rateby value should be nums and not strings so that we can compare them.
  };

  //calling the above function and passing arguments

  const RatingItems = sortItemsByRating(getSortedList, state.rateBy);

  //function to remove out of stock items

  const inStockItems = (data, inStock) => {
    if (inStock) {
      return [...data].filter((product) => product.inStock);
    }

    return data;
  };

  //start from here and pass arguments (similar logic as ratings as mentioned by poornima, we've just added instock and fastderlivery items as true or false to backend)

  const inStockProducts = inStockItems(RatingItems, state.inStock);

  //function for fast delivery items

  const fastDeliveryItems = (data, fastDelivery) => {

    if(fastDelivery){

      return [...data].filter((product) => product.fastDelivery)
    }

    return data;
  }

  // using the above function and passing arguments

   const fastDeliveryProducts = fastDeliveryItems(inStockProducts, state.fastDelivery) //state.fastdelivery is what we get from the reducer and we render it here and then map the function to be shown in view




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

            <p>(Showing 10 Products)</p>
          </div>

          <div className="item-list">
            {fastDeliveryProducts.map((item) => (
              <ProductCard key={item._id} productcard={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductListing };
