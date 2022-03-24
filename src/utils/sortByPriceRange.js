//function for price range

const priceRangeProducts = (data, priceRange) => {
  return [...data].filter((product) => product.price <= priceRange);
};

export { priceRangeProducts };
