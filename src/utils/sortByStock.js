  //function to remove out of stock items

  import {RatingItems} from "../../src/utils/sortByRating"

  const inStockItems = (data, inStock) => {
    if (inStock) {
      return [...data].filter((product) => product.inStock);
    }

    return data;
  };


  const inStockProducts = inStockItems(RatingItems, state.inStock);

  export {inStockItems, inStockProducts}