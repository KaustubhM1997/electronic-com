import { useAuth } from "../../contexts/auth-context";
import "../../pages/Product-listing/product-listing.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useWishlist } from "../../contexts/wishlist-context";

const ProductCard = ({ productcard }) => {
  //destructuring the product card object from props
  const { state, dispatch } = useWishlist();

  //extracting the wishlist from state where we're storing it

  const { wishlist } = state;

  const { title, price, rating, productImg } = productcard; // destrructuring all the keys from productcard

  const {
    auth: { Authenticated, token },
  } = useAuth();

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  //this gets triggered when the heart icon is clicked below and the item is not present in the wishlist array

  // console.log(productcard);

  const addToWishlistHandler = async (productcard) => {
    //as soon as the user logs in, the pre-exisiting wishlist items are shown and then anything the user adds from product paage is added below when dispatch fires
    if (Authenticated) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product: productcard }, //product is the predefined key that we pass the value object to
          {
            headers: { authorization: token },
          }
        );

        console.log(response.data.wishlist);

        setErrors("");
        //the dispatch fires here as soon as the user clicks on heart
        dispatch({
          type: "MOVE_TO_WISHLIST",
          payload: response.data.wishlist, //gets added to the wishlist arraye
        });
      } catch (errors) {
        // setErrors(errors.response.data);
        console.log(errors);
      }
    } else {
      navigate("/login-page");
    }
  };

  //this gets triggered when the item id clicked is equal to the product id that's present in the wishlist. This removes the product from wishlist

  const removeFromWishlistHandler = async (id) => {
    if (Authenticated) {
      try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: { authorization: token },
        });

        setErrors("");
        dispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [...response.data.wishlist],
        });
      } catch (errors) {
        console.log(errors);
      }
    } else {
      navigate("/login-page");
    }
  };

  return (
    <div className="card-image">
      <div className="card-vertical">
        <div className="card-vertical-info flex-column">
          <img
            className="img-responsive adjust-image"
            src={productImg}
            alt="shopping-item"
          />
          <p className="card-text">{title}</p>

          <div className="rating-badge">
            {rating}
            <span className="star-icon">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>

          {/* <p className="card-subtext">
              A bit more detail about the product
            </p> */}
          <p className="card-text card-price">
            {price}
            <span className="text-line-through">7,999</span>
            <span className="discount-percent">40%</span>
          </p>
          <button className="btn btn-secondary">Add to Cart</button>

          {/* The first span checks whether the product is already present in the wishlist array, if yes then on click it removes from wishlisht. Meaning the heart color would already be filled here */}

          {Authenticated &&
          wishlist.find((item) => item._id === productcard._id) ? (
            <span
              onClick={() => removeFromWishlistHandler(productcard._id)}
              className="card-heart-icon"
            >
              <i class="fa-solid fa-heart"></i>
            </span>
          ) : (
            <span
              onClick={() => addToWishlistHandler(productcard)}
              className="card-heart-icon"
            >
              <i className="fa-regular fa-heart"></i>
            </span>
          )}

          {/* // the 2nd span triggers the handler when heart icon is clicked and pass our productcard(products) that we've got from product listing */}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
