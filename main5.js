"use strict";

// let map = new Map();

// map.set("key1", "value1");
// map.set("key2", "value2").set("key3", true).set("key4", false);

// console.log(map);

// console.log("------------------------");

// let map1 = new Map();
// map1.set(false, "closed").set(true, { open: 1200 });

// console.log(map1);
// console.log(map1.get(true));
// console.log(map1.get(false));

// console.log("-------------------------------");

// let map2 = new Map();
// map2.set(20, [1, 2, 3]).set("city", "London");
// console.log(map2);
// console.log(map2.get(20));
// console.log(map2.has(20));

// console.log("--------------------------------");

// let map3 = new Map();
// map3.set("color1", "red").set("backgroundColor", "pink").set("isAdmin", true);

// map3.delete("color1");
// console.log(map3);
// console.log(map3.size);

// console.log("----------------------------------");

// const map4 = new Map();
// map4.set("name", "Costa").set("age", 29).set("car", "TOYOTA");

// for (let key of map4.keys()) {
//   console.log(key);
// }

// for (let value of map4.values()) {
//   console.log(value);
// }

// console.log("------------------------------------");

// for (let [key, item] of map4.entries()) {
//   console.log(key, item);
// }

// console.log("--------------------------------------");

// const map5 = new Map();
// map5.set("name", "Costa").set("age", 29).set("car", "TOYOTA");

// map5.clear();

// console.log(map5);

// console.log("------------------------------------");

// const obj1 = { name: "John" };
// const obj2 = { name: "Costa", age: 29 };

// const objMap = new Map();
// objMap.set(obj1, "value1").set(obj2, "value2");

// console.log(objMap);
// console.log(objMap.get(obj1));
// console.log(objMap.get(obj2));

// console.log("--------------------------------------");

// const map6 = new Map([
//   ["color1", "red"],
//   ["color2", "blue"],
// ]);

// console.log(map6);
// console.log(map6.has("color1"));
// console.log(map6.get("color1"));

// console.log("-------------------------------------------");

// const map7 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);

// map7.forEach((value, key) => {
//   console.log(key, value);
// });

// console.log("------------------------------------------");

// const arr10 = [1, 2, 3, 4, 5];
// const map8 = new Map([
//   ["key5", true],
//   [arr10, "value20"],
// ]);

// console.log(map8);
// console.log(map8.get(arr10));

// console.log("-----------------------------------------");

// const map9 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);

// const mapToArr = Array.from(map9);
// console.log(mapToArr);

// console.log("-----------------------------------------");

// const str = "hello";
// const str1 = Array.from(str);
// console.log(str);
// console.log(str1);
// const str2 = [...str];
// console.log(str2);

// console.log("------------------------------------------");

// const map10 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);

// const arr = [];
// map10.forEach((item, index) => {
//   arr.push([item, index]);
// });

// console.log(arr);

// console.log("--------------------------------");

// const map11 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);

// const mapToObject = Object.fromEntries(map11);
// console.log(mapToObject);

// console.log("-------------------------------");

// const arr2 = [
//   [1, 2],
//   [3, 4],
// ];
// const arr3 = Object.fromEntries(arr2);
// console.log(arr3);

// console.log("-------------------------------");

// const map12 = new Map([
//   ["a", 10],
//   ["b", false],
// ]);

// const obj5 = Object.fromEntries(map12);
// console.log(obj5);

// console.log("---------------------------------------");

// const map13 = new Map([
//   ["tel", 7839384739287],
//   ["city", "London"],
// ]);

// function mapToMyObject(map) {
//   let obj = {};

//   for (let [key, value] of map) {
//     obj[key] = value;
//   }
//   return obj;
// }

// console.log(mapToMyObject(map13));

// console.log("--------------------------------------------");

// const map14 = new Map([
//   ["tel", 7839384739287],
//   ["city", "London"],
// ]);

// map14.set(NaN, "hello world");
// console.log(map14.get(NaN));

// console.log('#########################################################################');

// const set1 = new Set();
// set1.add(true).add(false);
// set1.add([1, 2, 3, 4, 5]);
// set1.add("hello world");

// console.log(set1);

// console.log("----------------------------------");

// const set2 = new Set([1, 2, 3, 4, 1, 4, 4]);
// console.log(set2);
// console.log(set2.has(2));

// console.log("-----------------------------------");

// const arr = ["red", "blue", "red", 1, 2, 1, 2];
// const set3 = new Set(arr);
// console.log(set3);
// console.log(set3.size);

// console.log("-----------------------------------");

// const set4 = new Set([1, 2, 3, 4, 5, 2, 3, 7, 1]);
// console.log(set4);

// set4.forEach(function (item) {
//   console.log(item);
// });

// console.log("-----------------------------------");

// const set5 = new Set([1, 2, 3, false]);
// const arrSet5 = Array.from(set5);
// console.log(arrSet5);

// const set5Spread = [...set5];
// console.log(set5Spread);

// console.log("------------------------------------------");

// const arr1 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 2, 8, 6, "a", "a", "b"];
// const arr2 = new Set(arr1);
// arr2.clear();
// console.log(arr2);

// const arr3 = [...arr2];
// console.log(arr3);

// console.log("----------------------------------------");

// let set6 = new Set([1, 2, 3, 4]);
// let set7 = new Set([4, 3, 2, 1, 0]);

// let set8 = new Set([...set6, ...set7]);
// console.log(set8);

// console.log("---------------------------------------");

// let set9 = new Set([1, 2, 3, 4]);
// let set10 = new Set([5, 1, 3, 4]);

// let test = new Set([...set9].filter((a) => set10.has(a)));
// console.log(test);

// console.log("----------------------------------------");

// let set11 = new Set([1, 2, 3, 4]);
// let set12 = new Set([5, 1, 3, 4]);

// let diff = new Set([...set11].filter((x) => !set12.has(x)));
// console.log(diff);

// console.log("#####################################################");

// let obj = { name: "costa" };
// obj = null;

// let obj2 = {};
// let obj3 = {};

// obj2.car = "bmw";

// obj3 = obj2;

// console.log(obj2);
// console.log(obj3);

// console.log("---------------------------------------------------");

// const weak1 = new WeakMap();
// console.log(weak1);

// console.log("-----------------------------------");

// const weak2 = new WeakMap();
// const obj = {};
// weak2.set(obj, "hello");
// console.log(weak2);
// console.log(weak2.get(obj));
// console.log(weak2.has(obj));
// weak2.delete(obj);
// console.log(weak2);

// console.log("-----------------------------------");

// const persons = new WeakMap();
// const city = {};
// const myName = {};
// persons.set(city, "London").set(myName, "Costa");

// console.log(persons.get(city));
// console.log(persons.get(myName));

// console.log(persons.has(city));

// persons.delete(myName);
// console.log(persons);

// console.log("############################################################");

// const myWeakSet = new WeakSet();
// const obj1 = {};
// const obj2 = {};

// myWeakSet.add(obj1);
// myWeakSet.add(obj2);

// console.log(myWeakSet.has(obj1));
// console.log(myWeakSet.has({}));

// myWeakSet.delete(obj1);
// console.log(myWeakSet);

// console.log("-------------------------------------------");

// const users = new WeakSet();
// const obj3 = { name: "Costa" };
// const obj4 = { name: "Bob" };

// users.add(obj3);
// users.add(obj4);

// console.log(users.has(obj3));
// console.log(users.has(obj4));

// users.delete(obj3);
// console.log(users.has(obj3));
