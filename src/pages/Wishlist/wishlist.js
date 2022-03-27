import "../Home/home.css";
import "./wishlist.css";

import { WishlistCard } from "../../components/Wishlist-card/wishlist-card";
import { useWishlist } from "../../contexts/wishlist-context";

const Wishlist = () => {
  const {
    state: { wishlist },
  } = useWishlist(); //destructuring the wishlist db from state

  return (
    <div className="main-wrapper-wishlist">
      <div className="item-heading-wishlist">
        <h3>My Wishlist</h3>
      </div>

      <div class="item-list-wishlist">
        {wishlist.map((item) => {
          return <WishlistCard productcard={item} />;
        })}
      </div>
    </div>
  );
};

export { Wishlist };
