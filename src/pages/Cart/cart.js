import React from "react";
import { CartCard } from "../../components/Cart-card/cart-card";
import { useCart } from "../../contexts/cart-context";
import "../Home/home.css";
import "./cart.css";

const Cart = () => {
  const {
    state: { cartlist },
  } = useCart();

  console.log(cartlist);
  
  return (
    <>
    <h3>Items in Cart {cartlist.length}</h3>
      {cartlist.length > 0 ? (cartlist.map((item) => { 
        return (
       <CartCard key={item._id} productcard={item} />
      ); })) : ( <h4>Your Cart is empty</h4>)}



        {/* <!-- Price card --> */}

              <div className="price-details-cart">
          <div className="price-spec-cart">
            <span>Price (2 Items)</span>
            <span>₹19,000</span>
          </div>

          <div className="price-spec-cart">
            <span>Discount</span>
            <span className="text-green-cart">- ₹4,600</span>
          </div>

          <div className="price-spec-cart">
            <span>Delivery</span>
            <span className="text-green-cart">FREE</span>
          </div>

          <hr class="theme-break" />

          <div className="price-spec-cart">
            <span>Total Amount</span>
            <span>₹14,400</span>
          </div>

          <hr class="theme-break" />

          <button className="btn-order-cart">Place Order</button>
        </div>

    </>
  );
};

export { Cart };
