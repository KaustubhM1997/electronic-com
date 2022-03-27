import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "../../pages/Product-listing/product-listing.css";
import axios from "axios";

const WishlistCard = ({ productcard }) => {
  const {title, price, rating, productImg } = productcard;

  const {auth: {Authenticated, token}} = useAuth();
  const {dispatch: Wishlistdispatch} = useWishlist(); //renaming dispatch for better readibility
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

  console.log(productcard);

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

            {/* <p className="card-subtext">
              A bit more detail about the product
            </p> */}
            <p className="card-text card-price">
              {price}
              <span className="text-line-through">7,999</span>
              <span className="discount-percent">40%</span>
            </p>
            <button className="btn btn-secondary">Add to Cart</button>
            <span onClick={() => deleteFromWishlist(productcard._id)} className="card-heart-icon">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
  );
};

export { WishlistCard };
