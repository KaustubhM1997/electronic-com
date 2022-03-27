// import React from "react";
// // import { ProductCard } from "../../components/Product-card/product-card";
import "../Home/home.css";
import "./wishlist.css";

import { WishlistCard } from "../../components/Wishlist-card/wishlist-card";
import { useWishlist } from "../../contexts/wishlist-context";

// const Wishlist = () => {
//   return (
//     // <!-- Product Listing - Main  -->

//     <>
//
//  <main class="item-container">
//
//           <div class="card-image">
//             <div class="card-vertical">
//               <div class="card-vertical-info flex-column">
//                 <img
//                   class="img-responsive adjust-image"
//                   src="/assets/img-product.jpg"
//                   alt="shopping-item"
//                 />
//                 <p class="card-text">Some info about the product</p>
//                 <p class="card-subtext">A bit more detail about the product</p>
//                 <p class="card-text card-price">
//                   3,999
//                   <span class="text-line-through">7,999</span>
//                 </p>
//                 <button class="btn btn-secondary">Add to Cart</button>
//                 <span class="card-heart-icon">
//                   <i class="fa-solid fa-xmark"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//
//       </main>
//     </>
//   );
//  };

// export { Wishlist };

const Wishlist = () => {
  const {
    state: { wishlist }
  } = useWishlist(); //destructuring the wishlist db from state

  // console.log(wishlist, "hi");

  return (
    
    <div className="main-wrapper-wishlist">
      <div className="item-heading-wishlist">
        <h3>My Wishlist</h3>
      </div>

      <div class="item-list-wishlist">
        {wishlist.map((item) => { 
       return  <WishlistCard productcard={item} />;
        })}
      </div>
      </div>
    
  );
};

export { Wishlist };
