import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/Home/home.css";
import { signOut } from "../../services/signoutService";
import { useAuth } from "../../contexts/auth-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import {toast} from 'react-hot-toast';
import { useState } from "react/cjs/react.production.min";

const Nav = () => {
  const navigate = useNavigate();
  const {
    auth: { Authenticated },
    setAuth,
  } = useAuth();
  /* destructuring setauth and auth and further destructuring Authenticated from auth */

  const {
    state: { wishlist },
  } = useWishlist();

  const {
    state: { cartlist },
  } = useCart();

  return (
    <nav className="navigation-container">
      <div className="nav-brand">
        <NavLink style={({isActive}) => {

          return {

            backgroundColor: isActive ? "var(--secondary-color)" : ""
          }
        }}   className="header-style" to="/">
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
          <NavLink style={({isActive}) => {

            return {

              backgroundColor: isActive ? "var(--secondary-color)": ""
            }
          }}
            className="nav-icon"
            to={Authenticated ? "/wishlist" :  "/login-page "}
            
          >
            <i className="fa-regular fa-heart icon">
              {Authenticated && wishlist.length > 0 ? (
                <span className="notif-cart">{wishlist.length}</span>
              ) : null}
            </i>
          </NavLink>
        </div>

        <div className="badge-element nav-item">
          <NavLink

          style={({isActive}) => {

            return {

              backgroundColor: isActive ? "var(--secondary-color)": ""
            }
          }}
          
          to={Authenticated ? "/cart-management" : "/login-page"}>
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
