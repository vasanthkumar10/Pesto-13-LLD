const uuid = require("uuid");

const generateId = () => uuid.v4();

module.exports = {
  generateId,
};

// const arr = [1, 2, 3, 4, 5, 26, 17];
// const shuffledArr = arr.sort(() => Math.random() - 0.5);
// console.log(shuffledArr);
