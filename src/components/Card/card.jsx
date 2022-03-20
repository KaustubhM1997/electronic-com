import "../../pages/Home/home.css"


const Card = ({category}) => {


    const {categoryName, categoryImg} = category;

    return(

        <div  className="men-card">
    <p className="card-heading">{categoryName}</p>

    <img
      className="img-card adjust"
      src={categoryImg}
      alt="category-men"
    />
  </div>
    )



}

export {Card};