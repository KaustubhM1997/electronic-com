import {Link} from "react-router-dom";
import "../../pages/Home/home.css";

const Nav = () => {


    return (

        <nav className="navigation-container">
        <div className="nav-brand">
          <Link className="header-style" to="/">
            NOZAMA
          </Link>
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>

        <div className="input-search">
          <input className="search" placeholder="Search" type="search" />
        </div>

        <ul className="nav-pills">
          <button className="nav-item button">
            <Link className="login" to="/pages/authentication-pages/login.html">
              Login
            </Link>
          </button>

          <div className="badge-element nav-item">
            <Link to="/pages/wishlist-management/wishlist-management.html">
              <i className="fa-regular fa-heart icon"></i>
            </Link>

            <span className="notif-cart">12</span>
          </div>

          <div className="badge-element nav-item">
            <Link to="/pages/cart-management/cart-management.html">
              <i className="fa-solid fa-cart-arrow-down icon"></i>
            </Link>

            <span className="notif-cart">7</span>
          </div>
        </ul>
      </nav>


    )
}






export {Nav}