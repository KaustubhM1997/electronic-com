//function for fast delivery items

const fastDeliveryItems = (data, fastDelivery) => {
  if (fastDelivery) {
    return [...data].filter((product) => product.fastDelivery);
  }

  return data;
};

export { fastDeliveryItems };
