export const getDecimalsFromNumber = (mount) => {
  const objectPrices = {
    priceAmount: 0,
    priceDecimals: 0,
  };
  const price = mount.toString().split(".");
  if (price.length === 2) {
    objectPrices.priceAmount = price[0];
    objectPrices.priceDecimals = price[1];
  } else {
    objectPrices.priceAmount = price[0];
  }

  return objectPrices;
};
