const axios = require("axios");
const { cache } = require("./InMemoryCache");

async function getProductData(id) {
  if (cache.has(`product-${id}`)) {
    console.log("fetching the product from cache");
    return cache.get(`product-${id}`);
  }
  console.log("Fetching the data from server");
  const { data } = await axios.get(`https://reqres.in/api/products/${id}`);
  console.log("setting up the cache");
  cache.set(`product-${id}`, data.data);
  console.log("after setting the product cache", cache);
  return data.data;
}

module.exports = {
  getProductData,
};
