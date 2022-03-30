import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/Home/home.css";
import { signOut } from "../../services/signoutService";
import { useAuth } from "../../contexts/auth-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { unstable_createPortal } from "react-dom";

const Nav = () => {
  const navigate = useNavigate();
  const {
    auth: { Authenticated },
    setAuth,
  } = useAuth();

  const {
    state: { wishlist },
  } = useWishlist();

  {
    /* destructuring setauth and auth and further destructuring Authenticated from auth */
  }
  return (
    <nav className="navigation-container">
      <div className="nav-brand">
        <NavLink className="header-style" to="/">
          NOZAMA
          <i className="fa-solid fa-arrow-left-long nav-logo"></i>
        </NavLink>
      </div>

      <div className="input-search">
        <input className="search" placeholder="Search" type="search" />
      </div>

      <ul className="nav-pills">
        {!Authenticated && (
          <button className="nav-item button">
            <NavLink className="login" to="/login-page">
              Login
            </NavLink>
          </button>
        )}

        <div className="badge-element nav-item">
          <NavLink className="nav-icon" to="/wishlist">
            <i className="fa-regular fa-heart icon">
              {Authenticated && wishlist.length > 0 ? (
                <span className="notif-cart">{wishlist.length}</span>
              ) : null}
            </i>
          </NavLink>
        </div>

        <div className="badge-element nav-item">
          <NavLink to="/cart-management">
            <i className="fa-solid fa-cart-arrow-down icon">
              <span className="notif-cart">7</span>
            </i>
          </NavLink>
        </div>

        {Authenticated && (
          <button
            className="nav-item button"
            onClick={() => signOut(setAuth, navigate)}
          >
            <span className="login">Logout</span>
          </button>
        )}
      </ul>
    </nav>
  );
};

export { Nav };
