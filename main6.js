"use strict";

// const a = { age: 25 };
// console.log(a);

// console.log("-------------------------------------------------");

// const a1 = {
//   age: 22,
//   fn1: function () {
//     console.log("hello");
//   },
// };
// const a2 = Object.create(a1);
// a1.fn1();
// console.log(a2);

// console.log("-----------------------------------------------------");

// const obj1 = {
//   name: "Costa",
//   myMethod() {
//     console.log("hello world!");
//   },
// };

// const obj2 = Object.create(obj1);

// obj2.myMethod();
// obj2.city = "London";
// console.log(obj2);
// console.log(obj1.city);

// obj1.bol = true;
// console.log(obj2.bol);

// console.log("---------------------------------------------------");

// const a = {};
// console.log(a.__proto__);

// const obj = {};
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);

// proto.city = "London";
// proto.myFn = function () {
//   console.log("hello");
// };

// console.log(obj);

// console.log(obj.city);
// obj.myFn();

// console.log('-----------------------------------------------------');

// const obj = {};
// const proto = {
//   greet: function () {
//     console.log("hello");
//   },
//   tel: 898598479534,
// };
// Object.setPrototypeOf(obj, proto);

// proto.city = "London";

// console.log(obj.city);
// console.log(obj);

// obj.age = 25;

// console.log(obj);
// console.log(proto.age);
// console.log(obj.tel);

// console.log("---------------------------------------------------");

// const arr = [1, 2, 3];
// const arr2 = arr.map((el) => el + 20);
// console.log(arr2);

// console.log("---------------------------------------------");

// const obj = { age: 23 };
// console.log(obj);

// const arr = [1, 2, 3];
// console.log(arr);

// const obj2 = new Object({ car: true });
// obj2.name = "Costa";
// obj2.age = 22;
// console.log(obj2);

// const arr2 = new Array(1, 2, 3, 4);
// for (let i = 5; i < 201; i++) {
//   arr2.push(i);
// }
// console.log(arr2);

// const str = new String("hfgjkdhgfk");
// const num = new Number(23);

// console.log('-----------------------------------------------------');

// const a1 = (a, b) => a + b;
// console.log(a1(5, 5));

// const strHandler = (names) => `Hello ${names}`;
// console.log(strHandler("Alina"));

// console.log("-------------------------------------------");

// function fn1(a, b) {
//   return b(a);
// }

// function fn2(c) {
//   return c * 5;
// }

// console.log(fn1(10, fn2));

// const fn3 = (a, b) => b(a);
// const fn4 = (c) => c * 4;
// console.log(fn3(10, fn4));

// console.log("-----------------------------------------------");

// function m1(f) {
//   return function (a) {
//     return a * f;
//   };
// }

// const m2 = (f) => (a) => f * a;

// const t1 = m1(3);
// const t2 = m2(10);

// console.log(t1(6));
// console.log(t2(5));

// console.log("-----------------------------------------------");

// let numbers = [1, 2, 3, 4, 5];
// let d = numbers.map((num) => num * 2);

// let event = numbers.filter((num) => num % 2 === 0);
// console.log(event);

// let sum = numbers.reduce((acc, item) => acc + item, 0);

// console.log(sum);

// console.log('-------------------------------------------');

// const numbers = [1, 3, 7, 12, 14, 22, 58];
// const arr2 = numbers.filter((a) => a > 10);
// console.log(arr2);

// function arrFilter(arr, num) {
//   return arr.filter((number) => number > num);
// }
// const num = 10;
// const result = arrFilter(numbers, num);

// console.log(result);

// console.log("----------------------------------------------");

// const obj1 = {
//   name: "Alina",
//   mythod(lastname) {
//     console.log(`Hello, ${this.name} ${lastname}`);
//   },
// };

// const obj2 = {
//   name: "Valerii",
// };

// const myName = ["Hkjhkfd"];

// const a1 = obj1.mythod;

// a1.call(obj1, "Ovsianykova");
// a1.call(obj2, "Holubiev");
// a1.apply(obj1, myName);
// a1.apply(obj1, ["JHKhfkdjh"]);

// const a2 = obj1.mythod.bind(obj1, "Janowska");
// const a3 = obj1.mythod.bind(obj2, "Janowski");
// const a4 = obj1.mythod.bind(obj2);

// a2();
// a3();
// a4("Smith");

// console.log('-------------------------------------------------------');

// const obj = {
//   language: "C#",
//   arr: [],
//   myMethod(par1, par2) {
//     console.log(
//       `Hello, I am ${this.language} programmer, my name is ${par1}, i am ${par2} years old)`
//     );
//     this.arr.push({
//       name: par1,
//       lang: `${this.language}`,
//     });
//   },
// };

// const obj2 = {
//   language: "JavaScript",
//   arr: [],
// };

// const objCopy = obj.myMethod;

// objCopy.call(obj, "Costa", 24);
// objCopy.call(obj2, "Bob", 22);

// console.log(obj.arr);
// console.log(obj2.arr);

// const arr1 = ["Costa", 22];
// const arr2 = ["Alina", 27];

// objCopy.apply(obj, arr1);
// objCopy.apply(obj2, arr2);

// objCopy.call(obj2, ...arr2);

// const a3 = obj.myMethod.bind(obj);
// const a4 = obj.myMethod.bind(obj2);

// a3("Alina", 27);
// a4("Alina", 27);
