import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "../../pages/Cart/cart.css";

const CartCard = ({ productcard }) => {
  const { title, price, productImg } = productcard;

  const {
    dispatch,
    state: { cartlist },
  } = useCart();
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useWishlist();
  const {
    auth: { token },
  } = useAuth();

  //handler to move items back to wishlist

  const moveToWishlistHandler = async (productcard) => {
    try {
      if (wishlist.find((item) => item._id === product._id)) {
        console.log("The product is already in wishlist");
      } else {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product: productcard,
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

  // function to increase cart quantity

  const increaseQuantity = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_TO_CART", payload: response.data.cart });

      console.log(response.data.cart);
    } catch (errors) {
      console.log(errors.message);
    }
  };

  //funtion to decrease cart quantity

  const decreaseQuantity = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    } catch (errors) {
      console.log(errors.message);
    }
  };
  return (
    <>
      <div class="item-heading-cart">
        <h3>Your Cart</h3>
      </div>

      <div className="main-container-cart">
        {/* <!-- Cart card --> */}

        <div className="product-card-cart">
          <div className="image-section-cart">
            <img className="cart-img" src={productImg} alt="cart-item" />
          </div>
          <div className="product-details-cart">
            <span className="card-heading">{title}</span>
            <div className="product-price-cart">
              <span className="discount-price-cart">₹7200</span>
              <small className="original-price-cart">{price}</small>
            </div>

            <div className="quantity-cart">
              <button
                onClick={() => {
                  if (productcard.qty === 1) {
                    deleteFromCartHandler(productcard._id);
                  } else {
                    decreaseQuantity(productcard._id);
                  }
                }}
                className="btn-cart"
              >
                -
              </button>
              <input className="qty-input-cart" type="number" />
              {productcard.qty}
              <button
                onClick={() => increaseQuantity(productcard._id)}
                className="btn-cart"
              >
                +
              </button>
            </div>

            <div className="cta-buttons-cart">
              <button
                onClick={() => moveToWishlistHandler(productcard)}
                className="btn-primary"
              >
                Move to Wishlist
              </button>
              <span
                onClick={() => deleteFromCartHandler(productcard._id)}
                className="card-heart-icon secondary-cart"
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export { CartCard };
