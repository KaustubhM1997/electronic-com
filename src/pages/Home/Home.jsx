import "./home.css";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/card.jsx";
import { categories } from "../../backend/db/categories";

const Home = () => {
  // const [categoryMen] = categories; //categories is an array of objects // we would do this only if there was one category and pass categoryMen into category below.
  return (
    <>
      <section className="container-img">
        <img
          className="main-image"
          src="/assets/ecommerce-main.jpg"
          alt="banner-img"
        />

        <button className="button primary">
          <Link className="login" to="/product-listing">
            Shop Now
          </Link>
        </button>
      </section>

      <div className="category-row">
        <div className="sub-heading">
          <h2 className="h2">Shop by Category</h2>
        </div>

        {/* Mapping and passing to the card component */}

        <div className="card-container">
          {categories.map(
            // we take the categories from backend
            (
              categor //categor is every element from the categories database
            ) => (
              <Card key={categor._id} category={categor} /> //we use key as categor.id as categories (backend has a unique id). We take all categor elements we get from the database and put them in an object which we store in category. Then we pass category to our card component and then destructure it into categoryName and categoryId (these keys are present in categories). Then we just render the destrcutured items as JSX.
            )
            // this is an object
          )}
        </div>
      </div>

      <div className="category-row2">
        <div className="sub-heading">
          <h2 className="h2">Currently Trending</h2>
        </div>
        <div className="card-container">
          <div className="men-card">
            <p className="card-heading">Pet supplies</p>

            <img
              className="img-card adjust"
              src="/assets/pet-supplies.jpg"
              alt="category-pet-supplies"
            />
          </div>

          <div className="women-card">
            <p className="card-heading">Gaming accessories</p>

            <img
              className="img-card adjust"
              src="/assets/gaming-accessories.jpg"
              alt="category-gaming-accessories"
            />
          </div>

          <div className="kids-card">
            <p className="card-heading">Health and Personal Care</p>

            <img
              className="img-card adjust"
              src="/assets/health-personal-care.jpg"
              alt="category-health-personal-care"
            />
          </div>

          <div className="best-card">
            <p className="card-heading">Home Decor</p>

            <img
              className="img-card adjust"
              src="../assets/home-decor.jpg"
              alt="category-home-decor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
