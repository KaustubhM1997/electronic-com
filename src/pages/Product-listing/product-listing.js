import React from "react";
import "../Home/home.css";
import "./product-listing.css";

const ProductListing = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Filters with aside tag --> */}

        <aside className="filter-container flex-column">
          <div className="filter-header filter-spaces">
            <h3 className="filter-headings">Filters</h3>
            <a className="filter-clear" href="#">
              Clear
            </a>
          </div>

          <div className="filter-price flex-column filter-spaces">
            <h3 className="filter-headings">Price</h3>
            <div className="filter-price-range">
              <h3 className="filter-headings">100</h3>
              <h3 className="filter-headings">500</h3>
              <h3 className="filter-headings">1000</h3>
            </div>
            <input type="range" />
          </div>
          <div className="filter-category flex-column">
            <h3 className="filter-headings">Category</h3>
            <div className="input-checkbox-container">
              <input type="checkbox" className="input-checkbox" />
              <p className="checkbox-notify">Men Clothing</p>
            </div>

            <div className="input-checkbox-container">
              <input type="checkbox" class="input-checkbox" />
              <p className="checkbox-notify">Women Clothing</p>
            </div>
          </div>

          <div className="filter-rating flex-column filter-spaces">
            <h3 className="filter-headings">Rating</h3>
            <form className="rating-options flex-column">
              <label>
                {" "}
                <input type="radio" name="rating" value="4 Stars & above" />4
                Stars & above
              </label>
              <label>
                {" "}
                <input type="radio" name="rating" value="3 Stars & above" />3
                Stars & above
              </label>
              <label>
                {" "}
                <input type="radio" name="rating" value="2 Stars & above" />2
                Stars & above
              </label>
              <label>
                {" "}
                <input type="radio" name="rating" value="1 Stars & above" />1
                Star & above
              </label>
            </form>
          </div>

          <div className="filter-sortby flex-column filter-spaces">
            <h3 className="filter-headings">Sort by</h3>
            <form className="rating-options flex-column">
              <label>
                <input type="radio" name="rating" value="Price: Low to High" />
                Price: Low to High
              </label>
              <label>
                {" "}
                <input
                  type="radio"
                  name="rating"
                  value="Price: High to Low"
                />{" "}
                Price: High to Low{" "}
              </label>
            </form>
          </div>
        </aside>

        {/* <!-- Product Listing - Main  --> */}

        <main className="item-container">
          <div className="item-heading">
            <h3>Show All Products</h3>

            <p>(Showing 10 Products)</p>
          </div>

          <div className="item-list">
            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    class="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-image">
              <div className="card-vertical">
                <div className="card-vertical-info flex-column">
                  <img
                    className="img-responsive adjust-image"
                    src="/assets/img-product.jpg"
                    alt="shopping-item"
                  />
                  <p className="card-text">Some info about the product</p>
                  <p className="card-subtext">
                    A bit more detail about the product
                  </p>
                  <p className="card-text card-price">
                    3,999
                    <span className="text-line-through">7,999</span>
                  </p>
                  <button className="btn btn-secondary">Add to Cart</button>
                  <span className="card-heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductListing };
