   //function to filter by category (men, women, kids)

   import {fastDeliveryProducts} from "../../src/utils/sortByFastDelivery"

   const categoryItems = (data, category) => {

    if(category.length){

      return [...data].filter((product) => category.includes(product.categoryName)) //here we compare the categoryName present in the db to the category clicked by the user
    }

    return data;
   }

   //using the above function and passing arguments to it


  const getCategoryItems = categoryItems(fastDeliveryProducts, state.category);

  export {categoryItems, getCategoryItems}