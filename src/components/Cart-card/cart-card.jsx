

import "../../pages/Cart/cart.css"


const CartCard = () => {
  return (
    <div className="main-container">
      {/* <!-- Cart card --> */}

      <div className="product-card">
        <div className="image-section">
          <img
            className="cart-img"
            src="/assets/img-product.jpg"
            alt="cart-item"
          />
        </div>
        <div className="product-details">
          <span className="card-heading">Nike Air Jordan</span>
          <div className="product-price">
            <span className="discount-price">₹7200</span>
            <small className="original-price">₹9500</small>
          </div>

          <div className="quantity">
            <button className="btn">-</button>
            <input value="2" className="qty-input" type="number" />
            <button className="btn">+</button>
          </div>

          <div className="cta-buttons">
            <button className="btn-primary">Move to Wishlist</button>
            <span className="card-heart-icon secondary">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Price card --> */}

      <div className="price-details">
        <div className="price-spec">
          <span>Price (2 Items)</span>
          <span>₹19,000</span>
        </div>

        <div className="price-spec">
          <span>Discount</span>
          <span className="text-green">- ₹4,600</span>
        </div>

        <div className="price-spec">
          <span>Delivery</span>
          <span className="text-green">FREE</span>
        </div>

        <hr class="theme-break" />

        <div className="price-spec">
          <span>Total Amount</span>
          <span>₹14,400</span>
        </div>

        <hr class="theme-break" />

        <button className="btn-order">Place Order</button>
      </div>
    </div>
  );
};

export { CartCard };
