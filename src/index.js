import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/contexts/datafetch-context";
import { ProductProvider } from "./contexts/productListing-context";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <ProductProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </ProductProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
