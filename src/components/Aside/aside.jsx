import "../../pages/Home/home.css";
import "../../pages/Product-listing/product-listing.css";

const Aside = ({ dispatch, state }) => {
  return (
    <>
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
            <h3 className="filter-headings">1000</h3>
            <h3 className="filter-headings">2000</h3>
          </div>
          <input min="100" max="1000" step="200" type="range" />
        </div>

        <div className="filter-price flex-column filter-spaces">
          <h3 className="filter-headings">Filter Products</h3>
          <div className="input-checkbox-container">
            <input

            onChange={(e) => dispatch({type: "IN_STOCK", payload: e.target.checked })}
            name = "availability"
            type = "checkbox"
            checked = {state.inStock}
            className="input-checkbox" />
            <p className="checkbox-notify">Exclude Out of stock</p>
          </div>

          <div className="input-checkbox-container">
            <input

            onChange={(e) => dispatch({type: "FAST_DELIVERY", payload: e.target.checked})}   
            type="checkbox" 
            className="input-checkbox"
            name = "availability"
            checked = {state.fastDelivery}
             />
            <p className="checkbox-notify">Fast Delivery</p>
          </div>
        </div>

        <div className="filter-category flex-column">
          <h3 className="filter-headings">Category</h3>
          <div className="input-checkbox-container">
            <input type="checkbox" className="input-checkbox" />
            <p className="checkbox-notify">Men</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" className="input-checkbox" />
            <p className="checkbox-notify">Women</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" className="input-checkbox" />
            <p className="checkbox-notify">Kids</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" className="input-checkbox" />
            <p className="checkbox-notify">Best-sellers</p>
          </div>
        </div>

        <div className="filter-rating flex-column filter-spaces">
          <h3 className="filter-headings">Rating</h3>
          <form className="rating-options flex-column">
            <label>
              <input
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
            <label>
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
            <label>
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
            <label>
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
            <label>
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
            <label>
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
