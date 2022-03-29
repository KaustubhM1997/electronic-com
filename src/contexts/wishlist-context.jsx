import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./auth-context";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const initialState = {
    // this gets stored in state in the reducer

    wishlist: [], //initially the wishlist would be empty
  };

  const {
    auth: { Authenticated, token },
  } = useAuth();
  const [errors, setErrors] = useState("");

  const wishListReducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
      case "MOVE_TO_WISHLIST":
        return { ...state, wishlist: action.payload };
    }
  };

  //reducer to fire the item from product to wishlist

  const [state, dispatch] = useReducer(wishListReducer, initialState);

  //This is used for us to fetch data from the backend to show data on the Wishlist page. We put this in useffect as we want it to run after the render and whenever the user logs in because it's a private route. Whenever a user logs in, he should be able able to see what he added to the wihslist the last time he logged in

  useEffect(() => {
    async function getdataWishlist() {
      if (Authenticated) {
        try {
          //getting data from wishlist
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },

            
          });
          // console.log(response);
          setErrors("");

          // console.log(response);

          //firing our payload

          dispatch({
            type: "MOVE_TO_WISHLIST",
            payload: response.data.wishlist,
          });
        } catch (errors) {
          console.log(errors);
        }
      } else {
        dispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [],
        });
      }
    }

    getdataWishlist(); //IIFE
  }, [token]); //we want the useffect to run everytime the token changes, hence we put that in the dependency array

  return (
    <wishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
