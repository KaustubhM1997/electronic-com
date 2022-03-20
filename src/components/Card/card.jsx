import "../../pages/Home/home.css";

const Card = ({ categoryName, categoryImg }) => {
//   const { categoryName, categoryImg } = category;

  return (
    <div className="men-card">
      <p className="card-heading">{categoryName.name}</p>

      <img className="img-card adjust" src={categoryImg.img} alt="category-men" />
    </div>
  );
};

export { Card };
