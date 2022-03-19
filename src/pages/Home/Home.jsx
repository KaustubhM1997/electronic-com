import "./home.css";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
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

      <section className="container-img">
        <img className="main-image" src="/assets/ecommerce-main.jpg" alt="" />

        <button className="button primary">   <Link
          className="login"
          to="/pages/product-listing/product-listing.html"
        >
          Shop Now
        </Link></button>

     
      </section>
      <div className="sub-heading">
        <h2 className="h2">Shop by Category</h2>
      </div>
      <div className="card-container">
        <div className="men-card">
          <p className="card-heading">Men</p>

          <img className="img-card adjust" src="/assets/men-nav.webp" alt="" />
        </div>

        <div className="women-card">
          <p className="card-heading">Women</p>

          <img
            className="img-card adjust"
            src="/assets/women-nav.webp"
            alt=""
          />
        </div>

        <div className="kids-card">
          <p className="card-heading">Kids</p>

          <img className="img-card adjust" src="/assets/kids-nav.webp" alt="" />
        </div>

        <div className="best-card">
          <p className="card-heading">Best sellers</p>

          <img
            className="img-card adjust"
            src="../assets/best-seller nav.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export { Home };
