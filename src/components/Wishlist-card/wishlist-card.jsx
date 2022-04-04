import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "../../pages/Product-listing/product-listing.css";
import axios from "axios";
import { useCart } from "../../contexts/cart-context";

const WishlistCard = ({ wishlistItems }) => {
  const { title, price, rating, productImg, _id } = wishlistItems;

  const {
    state: { cartlist },
    dispatch: cartDispatch,
  } = useCart();

  const {
    auth: { Authenticated, token },
  } = useAuth();
  const { state: {wishlist}, dispatch: Wishlistdispatch } = useWishlist(); //renaming dispatch for better readibility
  const navigate = useNavigate();
  const deleteFromWishlist = async (id) => {
    if (Authenticated) {
      try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: { authorization: token },
        });
        Wishlistdispatch({
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

  // console.log(productcard);

  //this gets triggered when add to cart button is clicked

  const addToCartHandler = async (wishlistItems) => {
    if (Authenticated) {
      try {
        if (cartlist.find((item) => item._id === wishlistItems._id)) {
          console.log("The item is already present in the cart");
        } else {
          const response = await axios.post(
            "/api/user/cart",
            { product: wishlistItems },
            {
              headers: { authorization: token },
            }
          );
          cartDispatch({
            type: "ADD_TO_CART",
            payload: [...response.data.cart],
          });
        }
      } catch (errors) {
        console.log(errors);
      }
    } else {
      navigate("/login-page");
    }
  };

  return (
    <div className="card-image-wishlist">
      <div className="card-vertical-wishlist">
        <div className="card-vertical-info-wishlist flex-column-wishlist">
          <img
            className="img-responsive adjust-image-wishlist"
            src={productImg}
            alt="shopping-item"
          />
          <p className="card-text-wishlist">{title}</p>
          <div className="rating-badge-wishlist">
            {rating}
            <span className="star-icon-wislist">
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
          <p className="card-text card-price">
            {price}
            <span className="text-line-through">7,999</span>
            <span className="discount-percent">40%</span>
          </p>
        
          {
        cartlist.find((item) => item._id === _id) //we're just comparing the id of the item in cart to the id of the item in wishlist that we got from the prop above
         ? (  
            <button
              onClick={() => navigate("/cart-management")}
              className="btn btn-secondary"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() => addToCartHandler(wishlistItems)}
              className="btn btn-secondary"
            >
              Add to Cart
            </button>
          )}
          <span
            onClick={() => deleteFromWishlist(wishlistItems._id)}
            className="card-heart-icon"
          >
            <i className="fa-regular fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export { WishlistCard };
