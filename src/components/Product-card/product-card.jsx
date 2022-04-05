import { useAuth } from "../../contexts/auth-context";
import "../../pages/Product-listing/product-listing.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useProductListing } from "../../contexts/productListing-context";

const ProductCard = ({ productcard }) => {
  //destructuring the product card object from props
  const { state, dispatch } = useWishlist();


  //extracting the wishlist from state where it was stored

  const { wishlist } = state;

  const { title, price, rating, productImg, originalPrice } = productcard; // destrructuring all the keys from productcard

    //calculating discount percentage

    const discountPercent = Math.ceil(((originalPrice - price)/originalPrice) * 100)

  const {
    auth: { Authenticated, token },
  } = useAuth();

  const {
    state: { cartlist },
    dispatch: cartDispatch,
  } = useCart(); //destructuring cartlist from initial state and renaminf the dispatch from cart contexr as cartDispatch

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  //this gets triggered when the heart icon is clicked below and the item is not present in the wishlist array

  const addToWishlistHandler = async (productcard) => {
    //as soon as the user logs in, the pre-exisiting wishlist items are shown and then anything the user adds from product paage is added below when dispatch fires
    if (Authenticated) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product: productcard }, //product is the predefined key that we pass the producttcard value object to. We're just added the productcard (product clciked by the user) to the backend
          {
            headers: { authorization: token },
          }
        );

        setErrors("");
        //the dispatch fires here as soon as the user clicks on heart
        dispatch({
          type: "MOVE_TO_WISHLIST",
          payload: response.data.wishlist, //gets added to the wishlist array
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

  //this gets triggered when add to cart button is clicked

  const addToCartHandler = async (productcard) => {
    if (Authenticated) {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: productcard },
          {
            headers: { authorization: token },
          }
        );

        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
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
            <span className="text-line-through">{originalPrice}</span>
            <span className="discount-percent">{discountPercent}%</span>
          </p>

          {/* If the item id present in the cart is equal to the one in the product page then we take the users to the cart page or else show the add to cart button */}
          {Authenticated &&
          cartlist.find((item) => item._id === productcard._id) ? (
            <button
              onClick={() => navigate("/cart-management")}
              className="btn btn-secondary"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() => addToCartHandler(productcard)}
              className="btn btn-secondary"
            >
              Add to Cart
            </button>
          )}

          {/* The first span checks whether the product is already present in the wishlist array, if yes then on click it removes from wishlisht. Meaning the heart color would already be filled here */}

          {Authenticated &&
          wishlist.find((item) => item._id === productcard._id) ? (
            <span
              onClick={() => removeFromWishlistHandler(productcard._id)}
              className="card-heart-icon"
            >
              <i className="fa-solid fa-heart"></i>
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
