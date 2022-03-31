import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/Home/home.css";
import { signOut } from "../../services/signoutService";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";

const Nav = () => {
  const navigate = useNavigate();
  const {
    auth: { Authenticated },
    setAuth,
  } = useAuth();

  const {
    state: { cartlist },
  } = useCart();

  {
    /* destructuring setauth and auth and further destructuring Authenticated from auth */
  }
  return (
    <nav className="navigation-container">
      <div className="nav-brand">
        <NavLink className="header-style" to="/">
          NOZAMA
        </NavLink>
        <i className="fa-solid fa-arrow-left-long"></i>
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
          <NavLink to="/wishlist">
            <i className="fa-regular fa-heart icon"></i>
          </NavLink>

          <span className="notif-cart">12</span>
        </div>

        <div className="badge-element nav-item">
          <NavLink to={Authenticated ? "/cart-management" : "/login-page"}>
            <i className="fa-solid fa-cart-arrow-down icon">
              {Authenticated && cartlist.length > 0 ? (
                <span className="notif-cart">{cartlist.length}</span>
              ) : null}
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
