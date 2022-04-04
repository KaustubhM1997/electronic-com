import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { wishListReducer } from "../reducers/wishlistReducer";
import { useAuth } from "./auth-context";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  /// put all your reducer logic here

  const initialState = {
    // this gets stored in state in the reducer

    wishlist: [], //initially the wishlist would be empty
  };

  const {
    auth: { Authenticated, token },
  } = useAuth();
  const [errors, setErrors] = useState("");

  //reducer to fire the item from product to wishlist

  const [state, dispatch] = useReducer(wishListReducer, initialState);

  //This is used for us to fetch data from the backend to show data on the Wishlist page. We put this in useffect as we want it to run after the render and whenever the user logs in because it's a private route.

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
          setErrors("");

          //firing our payload

          dispatch({
            type: "MOVE_TO_WISHLIST",
            payload: [...response.data.wishlist], // we just setdata to state
          });
        } catch (errors) {
          console.log(errors);
        }
        //we don't need anything in else here because if the user is not logged in then he won't be able to access cart in the first place.
      }
    }

    getdataWishlist(); //IIFE
  }, [token]); //we want the useffect to run everytime the token changes

  return (
    <wishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
