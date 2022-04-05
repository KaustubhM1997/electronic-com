import React from "react";
import { CartCard } from "../../components/Cart-card/cart-card";
import { useCart } from "../../contexts/cart-context";
import "../Home/home.css";
import "./cart.css";

const Cart = () => {
  const {
    state: { cartlist },
  } = useCart();


  //All the cart items are present in cartlist, hence we desctructure cartlist here from its state through context

  const actualTotalPrice = Math.round(
    cartlist.reduce(
      (acc, current) => acc + Number(current.originalPrice * current.qty),
      0
    )
  );

  const totalDiscount = Math.round(
    cartlist.reduce(
      (acc, current) =>
        acc + Number((current.originalPrice - current.price) * current.qty),
      0
    )
  );

  const finalPrice = Math.round(actualTotalPrice - totalDiscount);

  return (
    <>
      <div className="item-heading-cart">
        <h3>My Cart</h3>
        <p className="cart-quantity"> Items in Cart ({cartlist.length})</p>
      </div>

      <div className="main-cart-wrapper">
        <div className="cartlist-wrapper">
          {
            cartlist.length > 0
              ? cartlist.map((item) => {
                  return <CartCard key={item._id} cartItems={item} />;
                })
              : ""
            //  (
            //   <h4>Your Cart is empty</h4>
            // )
          }
        </div>

        {/* <!-- Price card --> */}

        {/* Using setstate, I can put a flag here to put a condition where if cartlist items are less than 0 then the price card should disppear as well, and should only appear when carlist items are greater than 0  */}

        <div className="price-details-wrapper">
          <div className="price-details-cart">
            <div className="price-spec-cart">
              <span>Price ({cartlist.length} Items)</span>
              <span>₹{actualTotalPrice}</span>
            </div>

            <div className="price-spec-cart">
              <span>Discount</span>
              <span className="text-green-cart">₹{totalDiscount}</span>
            </div>

            <div className="price-spec-cart">
              <span>Delivery</span>
              <span className="text-green-cart">FREE</span>
            </div>

            <hr class="theme-break" />

            <div className="price-spec-cart">
              <span>Total Amount</span>
              <span>₹{finalPrice}</span>
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
