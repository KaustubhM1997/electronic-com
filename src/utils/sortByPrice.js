//function definition to sort items by price

const getSortedItems = (productData, sortItemsBy) => {
  if (sortItemsBy === "LOW_TO_HIGH") {
    return [...productData].sort((item1, item2) => {
      const price1 = item1.price - item2.price;
      return price1;
    });
  } else if (sortItemsBy === "HIGH_TO_LOW") {
    return [...productData].sort((item1, item2) => {
      const price2 = item2.price - item1.price; //the price here is what we get from the db
      return price2;
    });
  }
  return productData;
};

export { getSortedItems };
