const axios = require("axios");
const { cache } = require("./InMemoryCache");

async function getUserData(id) {
  if (cache.has(`user-${id}`)) {
    console.log("fetching the user from cache");
    return cache.get(`user-${id}`);
  }
  console.log("Fetching the data from server");
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
  console.log("setting up the cache");
  cache.set(`user-${id}`, data.data);
  console.log("after setting the user cache", cache);
  return data.data;
}

module.exports = {
  getUserData,
};
