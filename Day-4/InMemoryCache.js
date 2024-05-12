const { v4 } = require("uuid");

class InMemoryCache {
  constructor(id) {
    this.cache = { id };
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  has(key) {
    return key in this.cache;
  }

  remove(key) {
    if (this.has(key)) delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }

  static getInstance(id) {
    if (!InMemoryCache.instance) {
      InMemoryCache.instance = new InMemoryCache(id);
    }
    return InMemoryCache.instance;
  }
}

// singleton object

// const cache = new InMemoryCache()

// const cache = InMemoryCache.getInstance(10);
// console.log("cache", cache);
// const cache2 = InMemoryCache.getInstance(20);
// console.log("cache2", cache2);

// module.exports = {
//   cache,
//   InMemoryCache,
// };

const cache = InMemoryCache.getInstance(v4());

module.exports = {
  cache,
};
