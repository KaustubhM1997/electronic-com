import "./home.css";

import React from "react";
import { Nav } from "../../components/Nav/nav";
import { Link } from "react-router-dom";
import {Card} from "../../components/Card/card.jsx";
import { categories } from "../../backend/db/categories";


const Home = () => {

  const [categoryMen] = categories; //categories is an array of objects
  return (
    <>

      <Nav />

      <section className="container-img">
        <img
          className="main-image"
          src="/assets/ecommerce-main.jpg"
          alt="banner-img"
        />

        <button className="button primary">

          <Link className="login" to="/product-listing">

            Shop Now
          </Link>
        </button>
      </section>

      <div className="category-row">
        <div className="sub-heading">
          <h2 className="h2">Shop by Category</h2>
        </div>
        <div className="card-container">

          <div className="men-card">
            <p className="card-heading">Men</p>

            <img
              className="img-card adjust"
              src="/assets/men-nav.webp"
              alt=""
            />
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

            <img
              className="img-card adjust"
              src="/assets/kids-nav.webp"
              alt=""
            />
          </div>

          {

            categories.map((category, index) => {


              <Card key = {index} categoryName = {category.categoryName} categoryImg = {category.categoryImg} />
            })
          }


          {/* {categories.map((category) => {


          })}
          <Card category = {categoryMen} /> */}
          {/* <div className="men-card">
            <p className="card-heading">Men</p>

            <img
              className="img-card adjust"
              src="/assets/men-nav.webp"
              alt="category-men"
            />
          </div> */}

          {/* <div className="women-card">
            <p className="card-heading">Women</p>

            <img
              className="img-card adjust"
              src="/assets/women-nav.webp"
              alt="category-women"
            />
          </div>

          <div className="kids-card">
            <p className="card-heading">Kids</p>

            <img
              className="img-card adjust"
              src="/assets/kids-nav.webp"
              alt="category-kids"
            />
          </div>
          <div className="best-card">
            <p className="card-heading">Best sellers</p>

            <img
              className="img-card adjust"
              src="../assets/best-seller-nav.jpg"
              alt=""
            />
          </div>
              alt="category-bestseller"
            />
          </div> */}

        </div>
      </div>

      <div className="category-row2">
        <div className="sub-heading">
          <h2 className="h2">Currently Trending</h2>
        </div>
        <div className="card-container">
          <div className="men-card">
            <p className="card-heading">Pet supplies</p>

            <img
              className="img-card adjust"
              src="/assets/pet-supplies.jpg"

          
              alt="category-pet-supplies"

            />
          </div>

          <div className="women-card">
            <p className="card-heading">Gaming accessories</p>

            <img
              className="img-card adjust"
              src="/assets/gaming-accessories.jpg"

     
              alt="category-gaming-accessories"
            />
          </div>

          <div className="kids-card">
            <p className="card-heading">Health and Personal Care</p>

            <img
              className="img-card adjust"
              src="/assets/health-personal-care.jpg"

          
              alt="category-health-personal-care"
            />
          </div>

          <div className="best-card">
            <p className="card-heading">Home Decor</p>

            <img
              className="img-card adjust"
              src="../assets/home-decor.jpg"
              alt="category-home-decor"
            />
          </div>
        </div>
      </div>

      <footer class="footer-container">
        <div className="grid-container">
          <div>
            <h3 className="footer-list-header">Site Links</h3>
            <ul className="footer-items-list">
              <li className="footer-items">Product Listing</li>
              <li className="footer-items">Your orders</li>
              <li className="footer-items">Cart</li>
              <li className="footer-items">Wishlist</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-list-header">Socials</h3>
            <ul className="footer-items-list">
              <li className="footer-items">GitHub</li>
              <li className="footer-items">LinkedIn</li>
              <li className="footer-items">Twitter</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-list-header">Let us Help You</h3>
            <ul className="footer-items-list">
            <li className="footer-items">Help</li>
              <li className="footer-items">Nozama Assistant</li>
              <li className="footer-items">Returns and Replacements</li>
              
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Home };
