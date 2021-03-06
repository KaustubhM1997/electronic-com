import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducers/cartReducer";
import { useAuth } from "./auth-context";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const initialState = {
  cartlist: [], //we pass an empty array as the initial state as initially the cart would be empty
};

const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const {
    auth: { Authenticated, token },
  } = useAuth(); // a function that returns something should be inside a functional component

  const [state, dispatch] = useReducer(cartReducer, initialState);

  //we run a useeffect here to get pre-saved cart items when the user logs in again

  useEffect(() => {
    async function getCartItems() {
      if (Authenticated) {
        try {
          const response = await axios.get("/api/user/cart", {
            //authorization to access data through token
            headers: {
              authorization: token,
            },
          });

          dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
        } catch (errors) {
          console.log(errors);
        }

        //we don't need anything in else here because if the user is not logged in then he won't be able to access cart in the first place.
      }
    }

    getCartItems();
  }, [token]); //calling this only when the token changes

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
