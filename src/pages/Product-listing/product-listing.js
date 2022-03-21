import React from "react";
import "../Home/home.css";
import "./product-listing.css";
import { Aside } from "../../components/Aside/aside";
import { useProduct } from "../../contexts/product-context";
import { ProductCard } from "../../components/Product-card/product-card";
import { useReducer } from "react";

const ProductListing = () => {
  const { products, error } = useProduct();

// this is where the filters would go back on clear

const initialFilters = {
  sortItemsBy: '',
  rateBy: null
  // inStock: false,
  // fastDelivery: false,
  // priceRange: 981
};



const [state, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case "SORT":
      // console.log("Kaus");
      return { ...state, sortItemsBy: action.payload };
      case "FILTER_BY_RATINGS":
      return {...state, rateBy: action.payload.rateBy};
  }
}, initialFilters);


// Move this to util, function to sort by price

const getSortedItems = (productData, sortItemsBy) => {
  if (sortItemsBy === "LOW_TO_HIGH") {
    return [...productData].sort((item1, item2) => {
      const price1 = item1.price - item2.price;
      return price1;
    });
  } else if (sortItemsBy === "HIGH_TO_LOW") {
    return [...productData].sort((item1, item2) => {
      const price2 = item2.price - item1.price;
      return price2;
    });
  }
  return productData;
};


const getSortedList = getSortedItems(products, state.sortItemsBy); // 1


const sortFourStarItems = (productData, rateBy) => {

  if(rateBy === "4_STARS_AND_ABOVE"){

    return[...productData].filter((product) => product.rateBy >= rateBy)
  }

  return productData
}

const getFourStarItems = sortFourStarItems(getSortedList, state.rateBy)







  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Filters with aside tag --> */}

        <Aside dispatchProp = {dispatch} state = {state} /> 
        
        {/* // You can communicate between two files  */}

        {/* <!-- Product Listing - Main  --> */}

        <main className="item-container">
          <div className="item-heading">
            <h3>Show All Products</h3>

            <p>(Showing 10 Products)</p>
          </div>

          <div className="item-list">
            {getFourStarItems.map((item) => (
              <ProductCard  key = {item._id} productcard={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductListing };
