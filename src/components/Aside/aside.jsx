import { useProductListing } from "../../contexts/productListing-context";
import "../../pages/Home/home.css";
import "../../pages/Product-listing/product-listing.css";
import { Link } from "react-router-dom";

const Aside = () => {
  const { state, dispatch } = useProductListing();
  return (
    <>
      <aside className="filter-container flex-column">
        <div className="filter-header filter-spaces">
          <h3 className="filter-headings">Filters</h3>
          <span
            onClick={() => dispatch({ type: "CLEAR" })}
            className="filter-clear"
            href="#"
          >
            Clear
          </span>
        </div>

        <div className="filter-price flex-column filter-spaces">
          <h3 className="filter-headings">Price: {state.priceRange}</h3>
          <div className="filter-price-range">
            <h3 className="filter-headings">100</h3>
            <h3 className="filter-headings">1000</h3>
            <h3 className="filter-headings">1990</h3>
          </div>
          <input
            className="slider-range"
            onChange={(e) =>
              dispatch({ type: "PRICE_RANGE", payload: Number(e.target.value) })
            }
            value={state.priceRange}
            min="120"
            max="1990"
            step="55"
            type="range"
          />
        </div>

        <div className="filter-price flex-column filter-spaces">
          <h3 className="filter-headings">Filter Products</h3>
          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({
                  type: "IN_STOCK",
                  payload: e.target.checked,
                })
              }
              name="availability"
              type="checkbox"
              checked={state.inStock}
              id="out_of_stock"
              className="input-checkbox"
            />
            <label for="out_of_stock">
              {" "}
              <p className="checkbox-notify">Exclude Out of stock</p>
            </label>
          </div>

          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({ type: "FAST_DELIVERY", payload: e.target.checked })
              }
              type="checkbox"
              className="input-checkbox"
              name="availability"
              id="fast_delivery"
              checked={state.fastDelivery}
            />
            <label for="fast_delivery">
              <p className="checkbox-notify">Fast Delivery</p>
            </label>
          </div>
        </div>

        <div className="filter-category flex-column">
          <h3 className="filter-headings">Category</h3>
          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              name="MEN"
              checked={state.category.includes("Men")}
              type="checkbox"
              value="Men"
              id="men"
              className="input-checkbox"
            />
            <label for="men">
              <p className="checkbox-notify">Men</p>
            </label>
          </div>

          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              name="WOMEN"
              checked={state.category.includes("Women")}
              type="checkbox"
              value="Women"
              id="women"
              className="input-checkbox"
            />
            <label for="women">
              <p className="checkbox-notify">Women</p>
            </label>
          </div>

          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              name="KIDS"
              checked={state.category.includes("Kids")}
              type="checkbox"
              value="Kids"
              id="kids"
              className="input-checkbox"
            />
            <label for="kids">
              <p className="checkbox-notify">Kids</p>
            </label>
          </div>

          <div className="input-checkbox-container">
            <input
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              name="BEST-SELLER"
              value="Best-sellers"
              checked={state.category.includes("Best-sellers")}
              type="checkbox"
              id="best-seller"
              className="input-checkbox"
            />
            <label for="best-seller">
              <p className="checkbox-notify">Best-sellers</p>
            </label>
          </div>
        </div>

        <div className="filter-rating flex-column filter-spaces">
          <h3 className="filter-headings">Rating</h3>
          <form className="rating-options flex-column">
            <label className="rating-label">
              <input
                className="rating-input"
                onChange={() =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: 4,
                  })
                }
                checked={state.rateBy === 4}
                type="radio"
                name="rating"
                value="4 Stars & above"
              />
              4 Stars & above
            </label>

            <label className="rating-label">
              <input
                onChange={() =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: 3,
                  })
                }
                checked={state.rateBy === 3}
                type="radio"
                name="rating"
                value="3 Stars & above"
              />
              3 Stars & above
            </label>
            <label className="rating-label">
              <input
                onChange={() =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: 2,
                  })
                }
                checked={state.rateBy === 2}
                type="radio"
                name="rating"
                value="2 Stars & above"
              />
              2 Stars & above
            </label>
            <label className="rating-label">
              <input
                onChange={() =>
                  dispatch({
                    type: "FILTER_BY_RATINGS",
                    payload: 1,
                  })
                }
                checked={state.rateBy === 1}
                type="radio"
                name="rating"
                value="1 Star & above"
              />
              1 Star & above
            </label>
          </form>
        </div>

        <div className="filter-sortby flex-column filter-spaces">
          <h3 className="filter-headings">Sort by</h3>
          <form className="rating-options flex-column">
            <label className="rating-label">
              <input
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
                type="radio"
                name="price"
                checked={state.sortItemsBy === "LOW_TO_HIGH"}
                value="Price: Low to High"
              />
              Price: Low to High
            </label>
            <label className="rating-label">
              <input
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
                checked={state.sortItemsBy === "HIGH_TO_LOW"}
                type="radio"
                name="price"
                value="Price: High to Low"
              />
              Price: High to Low
            </label>
          </form>
        </div>
      </aside>
    </>
  );
};

export { Aside };
