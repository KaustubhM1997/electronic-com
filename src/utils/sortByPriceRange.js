  //function for price range

  import {getCategoryItems} from "../../src/utils/sortByCategory"

  const priceRangeProducts = (data, priceRange) => {
    return [...data].filter((product) => product.price <= priceRange);
  };
  
  //calling the above function
  
  const priceRangeItems = priceRangeProducts(
    getCategoryItems,
    state.priceRange
  );

  export {priceRangeProducts, priceRangeItems}
  