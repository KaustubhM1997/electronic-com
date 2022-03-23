//function for fast delivery items

import {inStockProducts} from "../../src/utils/sortByStock"

  const fastDeliveryItems = (data, fastDelivery) => {

    if(fastDelivery){

      return [...data].filter((product) => product.fastDelivery)
    }

    return data;
  }

  // using the above function and passing arguments

   const fastDeliveryProducts = fastDeliveryItems(inStockProducts, state.fastDelivery) //state.fastdelivery is what we get from the reducer and we render it here and then map the function to be shown in view

   export {fastDeliveryItems, fastDeliveryProducts}