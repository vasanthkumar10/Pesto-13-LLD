// proxy method

const amit = {
  name: "amit",
  age: 20,
};

const handler = {
  get(target, property) {
    // console.log("target -->", target);
    // console.log("property -->", property);
    if (property === "age") return;
    return target[property];
  },

  set(target, property, newValue) {
    // console.log("target -->", target);
    // console.log("property -->", property);
    // console.log("newValue -->", newValue);
    if (property !== "age") target[property] = newValue;
  },
};

const vasanth = new Proxy(amit, handler);
// console.log(vasanth.name, vasanth.age);
vasanth.name = "vasanth";
vasanth.age = 200;
console.log(vasanth);
