// "use strict";
// age = 40;
// console.log(window.age);
// console.log(age);

// window.console.log(20);

// function fn1() {
//   let name = "Alina";
//   console.log(name);
// }
// fn1();

// let user = {};
// let user1 = new Object();
// console.log(user);
// console.log(user1);

// const person = {
//   name: "Costa",
//   age: 29,
//   hobby: "gaming",
// };
// console.log(person);
// console.log(person.age);
// console.log(person["hobby"]);

// person.accaunt = true;
// console.log(person);
// console.log(person.accaunt);

// delete person.hobby;
// console.log(person);

// for (let key in person) {
//   console.log(`${key}---${person[key]}`);
// }

// const user2 = {
//   age: 55,
// };
// user2.name = "Ivan";
// user2.city = "Odessa";

// console.log(user2);

// delete user2.name;
// console.log(user2.age);

// const user = {
//   city: "London",
//   tel: +4893808023842,
//   "hello world": false,
// };
// console.log(user);
// console.log(user["hello world"]);

// user.tel = 500;
// console.log(user);

// const name = "Alina Ovaianykova";
// user[name] = true;

// user.city1 = "Krakow";
// console.log(user);

// console.log(
//   "-----------------------------------------------------------------"
// );

// let car = {
//   brand: "toyota",
//   model: "corolla",
//   specs: {
//     engine: "v6",
//     hors: "300",
//   },
// };
// console.log(car.model);
// console.log(car["model"]);

// console.log(car.specs.hors);

// let shop = {
//   items: ["bread", "milk", "eggs"],
// };

// console.log(shop.items);

// const user4 = {
//   add: function (a1, b1) {
//     return a1 + b1;
//   },
// };

// console.log(user4.add(8, 12));

// let calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtraction: function (a, b) {
//     return a - b;
//   },
//   multiplication(a, d) {
//     return a * b;
//   },
//   division: (a, b) => a / b,
// };
// console.log(calculator.division(10, 2));

// const user = {
//   age: 1995,
//   calcAge() {
//     return 2025 - this.age;
//   },
// };
// console.log(user.calcAge());

"use strict";

// function fn1() {
//   console.log(this);
// }
// fn1();

// console.log(fn1() === window);

// let obj = {
//   myMethod() {
//     return this;
//   },
// };
// console.log(obj.myMethod() === obj);

// document.querySelector("h1").addEventListener("click", function () {
//   this.style.backgroundColor = "pink";
// });

// document.querySelector("h1").addEventListener("click", () => {
//   document.querySelector("h1").style.backgroundColor = "pink";
// });

// const user3 = {
//   age: 1998,
//   myMethod() {
//     return () => {
//       return this;
//     };
//   },
// };
// console.log(user3.myMethod()() === user3);

// const person = {
//   age: 1995,
//   myAge() {
//     const a1 = () => {
//       console.log(2024 - this.age);
//     };
//     a1();
//   },
// };
// person.myAge();
// console.log("-------------------------------------------------");
// let person2 = {
//   firstnName: "Alina",
//   lastName: "Ovsianykova",
//   fullName() {
//     return `${this.firstnName} ${this.lastName}`;
//   },
// };
// console.log(person2.fullName());

// const obj1 = {
//   color: "red",
//   age: 15,
//   border: "2px",
// };

// const obj2 = obj1;
// obj2.age = 40;
// obj2.outline = "none";
// console.log(obj1);
// console.log(obj2);

// const obj1 = {
//   color: "red",
//   age: 15,
//   border: "2px",
// };

// const obj2 = Object.assign({}, obj1);
// obj2.age = 40;
// obj2.outline = "none";
// console.log(obj1);
// console.log(obj2);

// let obj1 = { name: "John" };
// let obj2 = {};
// Object.assign(obj2, obj1);
// console.log(obj1);
// console.log(obj2);

// let obj1 = { name: "John" };
// const obj3 = { names: "Alina", age: "27" };
// const obj2 = Object.assign({}, obj1, obj3);

// console.log(obj2);

// const fz = "size";
// const obj1 = {
//   age: 27,
//   city: "Krakow",
// };

// const obj2 = Object.assign({}, obj1);
// obj1[fz] = "100px";
// console.log(obj1);
// console.log(obj2);

// const fz = "200px";
// const obj1 = {
//   age: 27,
//   city: "Krakow",
//   colors: {
//     red: "#ff0000",
//     black: "#000",
//   },
// };

// const obj2 = Object.assign({}, obj1);
// obj1[fz] = "100px";
// obj2.colors.white = "#fff";
// console.log(obj1);
// console.log(obj2);

// const obj1 = {
//   age: 27,
//   city: "Krakow",
//   colors: {
//     red: "#ff0000",
//     black: "#000",
//   },
// };

// const obj2 = structuredClone(obj1);
// // const obj2 = { ...obj1 };
// obj2.age = 15;
// obj2.colors.yellow = "yellow";
// console.log(obj1);
// console.log(obj2);

// const a1 = {
//   name: "Costa",
//   age: 30,
//   isStudent: {
//     city: "London",
//     color: "blue",
//   },
// };

// const a2 = JSON.stringify(a1);
// const a3 = JSON.parse(a2);

// const a2 = JSON.parse(JSON.stringify(a1));
// a2.isStudent.color = "red";
// delete a2.isStudent.city;
// console.log(a1);
// console.log(a2);
// // console.log(a3);

// const obj1 = { name: "costa", age: "29" };
// const { name, age } = obj1;
// console.log(name);
// console.log(age);

// console.log("-----------------------------------------------");

// const obj1 = { name: "costa", age: "31" };
// const { name: myName, age: myAge } = obj1;

// console.log(myName);
// console.log(myAge);

console.log("--------------------------------------------------");

// const obj3 = { name: "Costa" };
// const { name, city = "London" } = obj3;
// console.log(city);
// console.log(name);

// const printHandler = ({ name, age, tel }) => {
//   console.log(`name:${name}, age:${age}, tel:${tel}`);
// };

// const person = {
//   name: "Costa",
//   age: 29,
//   tel: 99879837493,
// };

// printHandler(person);

// console.log("----------------------------------");

// const obj4 = {
//   name: "Alina",
//   open: 10,
//   style: {
//     display: "flex",
//     color: "pink",
//     fz: "42px",
//   },
// };
// const {
//   name,
//   style: { color, fz },
// } = obj4;
// console.log(name);
// console.log(fz);
// console.log(color);

// const users = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Alica" },
//   { id: 4, name: "Costa" },
// ];

// for (const { id, name } of users) {
//   console.log(`user ${id} - ${name}`);
// }

// const obj5 = {
//   name: "John",
//   age: 35,
//   country: "usa",
// };

// const { name, ...item } = obj5;
// console.log(name);
// console.log(item);

// const arr1 = [1, 2, 3, false];

// const arr2 = [...arr1, 4, 5, 6, 7];

// console.log(arr1);
// console.log(arr2);

// const arr3 = [10, 20, undefined, function () {}, {}, { age: 45 }];

// const [a1, s2, ...lastItems] = arr3;
// console.log(a1);
// console.log(s2);
// console.log(lastItems);

// const obj1 = {
//   name: "Jphn",
//   age: 44,
// };
// const obj2 = { ...obj1, country: "UK" };

// console.log(obj1);
// console.log(obj2);

// const objA = { open: 10, closed: 21 };
// const objAcopy = { ...objA };
// console.log(objA === objAcopy);

// const objB = { open: true };
// const a1 = objB;
// console.log(objB === a1);

// const { name, ...rest } = { ...{ name: "Costa", age: 22 }, city: "London" };
// console.log(name);
// console.log(rest);

// const objTest = { time: 1200, color: "blue", fz: "232px" };

// const { time, ...rest } = { ...objTest, tel: false };
// console.log(time);
// console.log(rest);
// const obj = {
//   name: "Bob",
//   day: 2,
//   seyHello: function () {
//     console.log(true);
//   },
//   openModal() {
//     return false;
//   },
// };

// let person = {
//   name: "Costa",
//   age: 32,
//   isAdmin: false,
// };

// Object.freeze(person);
// Object.seal(person);

// Object.preventExtensions(person);

// console.log(person);

// const keys = Object.keys(obj);
// const keys1 = Object.keys(person);
// const keys2 = Object.values(obj);
// const keys3 = Object.entries(person);

// console.log(keys);
// console.log(keys1);
// console.log(keys2);
// console.log(keys3);

// console.log(person.hasOwnProperty("name"));
// console.log(Object.isFrozen(person));
// console.log(Object.isSealed(person));

// for (let key of keys1) {
//   console.log(`${key} - ${person[key]}`);
// }

// const person = {
//   namr: "Alisa",
//   age: 12,
//   address: {
//     city: "London",
//     id: 16723,
//   },
// };

// const idCode = person.address.id ?? "empty";
// console.log(idCode);

// const val1 = undefined;
// const val2 = 200;

// const result = val1 ?? console.log("false");
// const result2 = val2 ?? "default value";

// console.log(result2);

// const user = {
//   name: "John",
//   address: {
//     city: "London",
//   },
// };
// let a1 = user.address?.city;

// console.log(a1);

// const person = {
//   name: "Costa",
//   address: {
//     city: "Krakow",
//   },
// };

// if (person.address?.city) {
//   console.log(`city is: ${person.address.city}`);
// } else {
//   console.log("there is no city...");
// }

// const user = {
//   name: "John",
//   address: null,
// };
// const city = user.address?.city ?? "there is no city...";
// console.log(city);

// const users = {
//   people: 310390483,
//   departament1: {
//     departament2: {
//       people: 1200,
//     },
//     departament3: {
//       people: 400,
//       city: "London",
//     },
//   },
// };

// console.log(users.departament1?.departament2?.country?.city ?? "isnt there");
// console.log(users.departament1.departament2.people);
