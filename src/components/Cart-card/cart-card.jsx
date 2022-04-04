import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "../../pages/Cart/cart.css";

const CartCard = ({ cartItems }) => {
  const { title, price, productImg, _id } = cartItems;

  const { dispatch } = useCart();
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlist();
  const {
    auth: { token },
  } = useAuth();
  const navigate = useNavigate();

  //handler to move items back to wishlist

  const moveToWishlistHandler = async (cartItems) => {
    try {
      if (wishlist.find((item) => item._id === product._id)) {
        // console.log("The product is already in wishlist"); //use react toastify here
      } else {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product: cartItems,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        wishlistDispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [...response.data.wishlist],
        });
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  //handler to delete items from cart

  const deleteFromCartHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "ADD_TO_CART", payload: [...response.data.cart] });
    } catch (errors) {
      console.log(errors.message);
    }
  };

  // function to update cart quantity (increase/decrease) based on type

  const updateQuantity = async (id, type) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_TO_CART", payload: response.data.cart });

      // console.log(response.data.cart);
    } catch (errors) {
      console.log(errors.message);
    }
  };
  return (
    <>
      {/* <!-- Cart card --> */}

      <div className="product-card-cart">
        <div className="image-section-cart">
          <img className="cart-img" src={productImg} alt="cart-item" />
        </div>
        <div className="product-details-cart">
          <span className="card-heading-cart">{title}</span>
          <div className="product-price-cart">
            <span className="discount-price-cart">{price}</span>
            <small className="text-line-through-cart">₹7,999</small>
          </div>

          <div className="quantity-cart">
            <button
              onClick={() => {
                if (cartItems.qty === 1) {
                  deleteFromCartHandler(cartItems._id);
                } else {
                  updateQuantity(cartItems._id, "decrement");
                }
              }}
              className="btn-cart"
            >
              -
            </button>
            {/* <input className="qty-input-cart" type="number" /> */}
            {cartItems.qty}
            <button
              onClick={() => updateQuantity(cartItems._id, "increment")}
              className="btn-cart"
            >
              +
            </button>
          </div>

          <div className="cta-buttons-cart">
            {wishlist.find((item) => item._id === _id) ? (
              <button
                onClick={() => navigate("/wishlist")}
                className="btn-primary"
              >
                Go to Wishlist
              </button>
            ) : (
              <button
                onClick={() => moveToWishlistHandler(cartItems)}
                className="btn-primary"
              >
                Move to Wishlist
              </button>
            )}

            <span
              onClick={() => deleteFromCartHandler(cartItems._id)}
              className="card-heart-icon secondary-cart"
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartCard };
