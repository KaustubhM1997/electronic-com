//function for sorting items as per rating

const sortItemsByRating = (productData, rateBy) => {
  // if(rateBy === "4_STARS_AND_ABOVE"){

  // console.log(productData);
  // console.log(rateBy);

  return [...productData].filter((product) => product.rating >= rateBy); // rating is what we get from the db and the values of rateby we pass in the specific input elements. The payload we get when dispatch is fired and the rateby value should be nums and not strings so that we can compare them.
};

export { sortItemsByRating };
