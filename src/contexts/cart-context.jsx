import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./auth-context";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const initialState = {
  cartlist: [], //we pass an empty array as the initial state as initially the cart would be empty
};



const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cartlist: action.payload }; //TRY REMOVING the array around action.payload
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {

  const {
    auth: { Authenticated, token },
  } = useAuth();   // a function that returns something should be inside a functional component

  // console.log("Hi")
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

            console.log(response);

          dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
        } catch (errors) {
          console.log(errors);
        }
      } else {
        dispatch({ type: "ADD_TO_CART", payload: [] }); //if the user didn't add any items to cart then previous time then we return an empty array
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
