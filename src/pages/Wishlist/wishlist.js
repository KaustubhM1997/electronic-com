import "../Home/home.css";
import "./wishlist.css";

import { WishlistCard } from "../../components/Wishlist-card/wishlist-card";
import { useWishlist } from "../../contexts/wishlist-context";

const Wishlist = () => {
  const {
    state: { wishlist },
  } = useWishlist(); //destructuring the wishlist db from state

  // console.log(wishlist, "hi");

  return (
    <div className="main-wrapper-wishlist">
      <div className="item-heading-wishlist">
        <h3>My Wishlist</h3>
        <p className="wishlist-quantity">
          {" "}
          Items in Wishlist ({wishlist.length})
        </p>
      </div>

      <div class="item-list-wishlist">
        {wishlist.map((item) => {
          return <WishlistCard key={item._id} wishlistItems={item} />;
        })}
      </div>
    </div>
  );
};

export { Wishlist };
