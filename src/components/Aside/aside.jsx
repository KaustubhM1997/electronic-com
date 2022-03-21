import "../../pages/Home/home.css";
import "../../pages/Product-listing/product-listing.css"


const Aside = () => {

    return (


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
          <input min = "100" max = "1000" step="200" type="range" />
        </div>
        <div className="filter-category flex-column">
          <h3 className="filter-headings">Category</h3>
          <div className="input-checkbox-container">
            <input type="checkbox" className="input-checkbox" />
            <p className="checkbox-notify">Men</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" class="input-checkbox" />
            <p className="checkbox-notify">Women</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" class="input-checkbox" />
            <p className="checkbox-notify">Kids</p>
          </div>

          <div className="input-checkbox-container">
            <input type="checkbox" class="input-checkbox" />
            <p className="checkbox-notify">Best-sellers</p>
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



    )


}

export {Aside};