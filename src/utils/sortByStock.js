//function to remove out of stock items

const inStockItems = (data, inStock) => {
  if (inStock) {
    return [...data].filter((product) => product.inStock);
  }

  return data;
};

export { inStockItems };
