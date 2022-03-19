import React from "react";
import "../Home/home.css";
import { Nav } from "../../components/Nav/nav";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Nav />

      <div className="sub-heading title">
        <h2 className="h2">Your Cart</h2>
      </div>
    </>
  );
};

export { Cart };
