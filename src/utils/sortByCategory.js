//function to filter by category (men, women, kids)

const categoryItems = (data, category) => {
  if (category.length) {
    return [...data].filter((product) =>
      category.includes(product.categoryName)
    ); //here we compare the categoryName present in the db to the category clicked by the user
  }

  return data;
};

export { categoryItems };
