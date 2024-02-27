// Procedural Programming
// OOPs -> Object Oriented Programming Structure/System
// Functional Programming

// class -> a custom datastructure (props and methods) -> blueprint/rules
// object -> real time entities
// properties or attribute -> variables inside a class
// methods or behvaiours -> function inside a class

// class Human {
//   age = 10;

//   eat(params) {
//     console.log("eating....");
//   }
// }

// ways to create object
// 1. Object literals
// 2. Factory method
// 3. Constructor method

// object literal
// const amit = {
//   name: "amit",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// const jamit = {
//   name: "jamit",
//   age: 20,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// factory method -> props -> object
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const amit = createPerson("amit", 10);
// const jamit = createPerson("jamit", 20);

// console.log(amit);
// console.log(jamit);

// constructor method
// this

// hoisting

// const obj = {
//   name: "dasdas",
//   demo: function () {
//     function inner() {
//       console.log(this);
//     }

//     inner();
//   },
// };

// obj.demo();

// whenever a fn is getting called -> new execution context will be created -> global object referred
// this -> parent

// if obj -> parent then this -> obj
// if function -> parent then this -> global object
// arrow fn => this => parent obj except global object

// const obj = {
//   name: "virat",
//   display: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   },
// };

// // obj.display();

// const dipslay = () => {
//   console.log(this);
// };

// dipslay();

// IIFE -> immediately invoked function expression

// (function (module, exports, __pathname, __dirname, require) {
//   // code
//   function display() {
//     console.log(this);
//   }

//   display();
// })(module, exports, __pathname, __dirname, require);

// const vasanth = {
//   name: "vasanth",
// };

// function file1(vasanth) {
//   vasanth.age = 20;
//   console.log(vasanth);
// }

// file1(vasanth);

// function file2(vasanth) {
//   console.log(vasanth);
// }

// file2(vasanth);

// constructor method
// A syntactic sugar of fn -> class
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.display = function () {
//     console.log(this.name, this.age);
//   };
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   display() {
//     console.log(this.name, this.age);
//   }
// }

// const amit = new Person("amit", 10);
// const jamit = new Person("jamit", 20);

// console.log("amit", amit);
// console.log("==".repeat(25));
// console.log("jamit", jamit);

// amit.display();
// jamit.display();

// const nums = [1, 2, 3];

const vasanth = {
  name: "vasanth",
  age: 10,
  show: function () {
    console.log("showing");
  },
};

// const nums = new Array(1, 2, 3);
// nums.__proto__ = vasanth;
// // nums.push(4);

// console.log(nums);

// nums.show();

// const nums = [10, 20, 30];
// // console.log(Array.isArray(nums));
// nums[100] = 100;
// nums["name"] = "vasanth";
// nums.__proto__ = new Array();

// console.log(nums, nums.length);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let data of nums) {
//   console.log(data);
// }

// keys
// for (let key in nums) {
//   console.log(key);
// }

// objects can't access static method -> util fns -> access to class props
class Human {
  // super()  # used to call parent's constructor
  age = 10;

  static eat() {
    console.log("eating");
  }

  get dance() {
    // getter -> treated as a varibale
    console.log("dance");
  }
}

const sachin = new Human();
// sachin.dance;

// sachin.eat();
// Human.eat();
