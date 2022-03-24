import "../../pages/Product-listing/product-listing.css";

const ProductCard = ({ productcard }) => {
  const { title, price, rating, productImg } = productcard;

  return (
    <>
      <div className="card-image">
        <div className="card-vertical">
          <div className="card-vertical-info flex-column">
            <img
              className="img-responsive adjust-image"
              src={productImg}
              alt="shopping-item"
            />
            <p className="card-text">{title}</p>

            <div className="rating-badge">
              {rating}
              <span className="star-icon">
                <i class="fa-solid fa-star"></i>
              </span>
            </div>

            {/* <p className="card-subtext">
              A bit more detail about the product
            </p> */}
            <p className="card-text card-price">
              {price}
              <span className="text-line-through">7,999</span>
              <span className="discount-percent">40%</span>
            </p>
            <button className="btn btn-secondary">Add to Cart</button>
            <span className="card-heart-icon">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
