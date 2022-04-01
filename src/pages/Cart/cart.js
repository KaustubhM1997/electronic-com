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
      <div class="item-heading-cart">
        <h3>My Cart</h3>
        <p className="cart-quantity"> Items in Cart ({cartlist.length})</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "70fr 30fr" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {
            cartlist.length > 0
              ? cartlist.map((item) => {
                  //whenever there's an item in the cart (cartlist), just map its details on the cartcard component
                  return <CartCard key={item._id} productcard={item} />;
                })
              : ""
            //  (
            //   <h4>Your Cart is empty</h4>
            // )
          }
        </div>

        {/* <!-- Price card --> */}

        {/* Using setstate, I can put a flag here to put a condition where if cartlist items are less than 0 then the price card should disppear as well, and should only appear when carlist items are greater than 0  */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* // style = {{display: "flex", justifyContent: "flex-start", alignItems: "center", */}

          <div style={{ marginTop: "2rem" }} className="price-details-cart">
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
            <button className="btn-order-cart btn-secondary-cart">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { Cart };
