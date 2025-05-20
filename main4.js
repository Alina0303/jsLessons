"use strict";

// const arr = [];
// console.log(arr);

// const arr1 = [1, "two", true, { key: "value" }, () => console.log("Hello")];
// console.log(arr1);

// const arr3 = [1, 2, 100, 200, 500];
// console.log(arr3);
// console.log(arr3[0]);

// const hi = "hello world";
// const fruits = ["apple", false, { city: "london" }];
// console.log(fruits[1]);
// fruits[1] = true;
// console.log(fruits[1]);
// fruits[0] = hi;
// console.log(fruits);

// const cars = ["toyota", "honda", "bmw"];
// console.log(cars.length);

// const arr5 = [1, 2, "hello"];
// arr5.push(10, undefined, 200);
// arr5.pop();
// console.log(arr5);

// const f1 = ["apple", false, 1, 2];
// console.log(f1.indexOf(2));

// const index = f1.indexOf(1);
// console.log(index);

// const newArr = [1, 2, 3];
// const a1 = newArr[0];
// newArr[0] = true;
// console.log(newArr);
// console.log(a1);

// const arr1 = [1, 2];
// arr1.push(true);
// arr1.push(10, 20, undefined, null);
// arr1.pop();
// arr1.unshift(100, 200);
// arr1.unshift(false);
// arr1.shift();
// arr1.shift();

// console.log(arr1);
// console.log(arr1.length);

// const arr = ["hello", "banana", "apple", false, "car"];
// //const sliceArr = arr.slice(1, 4);
// //const sliceArr = arr.slice(2);
// const sliceArr = arr.slice(0, -1);
// console.log(sliceArr);
// console.log(arr);

// const persons = [
//   { name: "Costa", age: 23 },
//   { name: "Bob", age: 13 },
//   { name: "Alex", age: 53 },
// ];

// const slicePersons = persons.slice(1, 3);
// console.log(slicePersons);

// const arr4 = [1, 2, 3, 4, 5];
// const removeItem = arr4.splice(2, 1);
// const removeItem3 = arr4.splice(1);
// const removeItem2 = arr4.splice(2, 1, 10, 20);
// const removeItem1 = arr4.toSpliced(2, 2);
// console.log(arr4);
// console.log(removeItem);
// console.log(removeItem1);
// console.log(removeItem2);
// console.log(removeItem3);

// const arr1 = [1, 2, 3, 4];
// //const a1 = arr1.splice(1, 0, undefined);
// const a1 = arr1.toSpliced(1, 0, undefined);
// console.log(arr1);
// console.log(a1);

// const a1 = ["a", "b", "c"];
// const a2 = ["d", "e", "f"];
// const newArr = a1.concat(a2);
// console.log(newArr);

// const arr5 = [1, 2, 3];
// const arr6 = arr5.concat(4, 5, 6, undefined, [500, 564]);
// console.log(arr6);

// console.log("----------------------------------------");

// const person = [{ name: "Costa", age: "45" }];
// const person2 = [{ name: "Bob", age: "26" }];

// const combinePerson = person.concat(person2);
// console.log(combinePerson);

// console.log("-------------------------------");

// let a7 = [10, 20];
// let a8 = ["a", "c"];
// let b1 = a7.concat(a8, 30, 40);
// console.log(b1);

// console.log("------------------------------------");

// const b3 = [10, 20];
// const b4 = [];
// const b5 = b3.concat(b4);
// console.log(b5);

// const arr = [1, "hello", true, "world"];
// for (const item of arr) {
//   console.log(item);
// }

// console.log("----------------------------------------");

// const numders = [1, 2, 3, 4, 5];
// let sum = 0;

// for (const num of numders) {
//   sum += num;
// }
// console.log(sum);

// const numders = [1, 2, 3, 4, 5];
// numbers.forEach((item, index, arr) => {});

// const arr3 = [1, 2, 3, 4];
// arr3.forEach(function (item, index, arr) {
//   console.log(`item:${item} index:${index} array:${arr}`);
// });

// const arr3 = [1, 2, 3, 4];
// arr3.forEach((item, index, arr) =>
//   console.log(`item:${item} index:${index} array:${arr}`)
// );

// console.log("------------------------------------------------------------");

// const arr4 = ["C#", "JavaScript", "Python", "C++"];
// arr4.forEach((item, index) => {
//   console.log(`index:${index} item:${item} `);
// });

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const s1 = [];

// numbers1.forEach((num) => {
//   s1.push(num * num);
// });
// console.log(s1);

// const numbers1 = [1, 2, 3, 4, 5];

// const stringA = numbers1.map((number) => {
//   return number.toString();
// });
// console.log(numbers1);

// console.log(stringA);
// console.log("----------------------------------------------------------------");

// const numbers2 = [1, 2, 3, 4, 5];

// const double = numbers2.map((num) => num * 3);
// console.log(numbers2);
// console.log(double);

// console.log(
//   "---------------------------------------------------------------------"
// );

// const users = [
//   {
//     id: 1,
//     name: "Costa",
//   },
//   {
//     id: 2,
//     name: "Vika",
//   },
//   {
//     id: 3,
//     name: "Bob",
//   },
// ];

// const userId = users.map((id) => id.id);
// console.log(userId);

// const userId1 = users.map((user) => {
//   return `${user.id} - ${user.name} `;
// });
// console.log(userId1);

// const numbers3 = [1, 2, 3, 4, 5];
// //filter(item,index,arr);

// const f = numbers3.filter((num) => num > 3);
// console.log(f);

// console.log("---------------------------------------------------------");

// const names = ["Ivan", "Vasilii", "Alexander", "Renat", "katia", "sania"];
// const f1 = names.filter((name) => name.length > 5);
// console.log(f1);

// console.log("------------------------------");

// const products = [
//   { price: 1, name: "banana" },
//   { price: 2, name: "apple" },
//   { price: 3, name: "orange" },
//   { price: 4, name: "peach" },
// ];
// const f3 = products.filter(function (product) {
//   return product.price > 2;
// });
// console.log(f3);

// console.log("------------------------");

// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);

// const numbers5 = [1, 2, 3, 4, 5];
// const f4 = numbers5.find((num) => num === 3);
// console.log(f4);
// console.log(numbers5);
// console.log("----------------------------------------------------");

// const products = [
//   { price: 1, name: "banana" },
//   { price: 2, name: "apple" },
//   { price: 3, name: "orange" },
//   { price: 4, name: "peach" },
// ];
// const f5 = products.find((user) => user.price === 2);
// console.log(f5);

// console.log("------------------------------------------------------");

// const products2 = [
//   { price: 1, name: "banana" },
//   { price: 2, name: "apple" },
//   { price: 3, name: "orange" },
//   { price: 4, name: "peach" },
// ];
// const f6 = products2.find((prod) => prod.price > 2 && prod.name.includes("ch"));
// console.log(f6);

// console.log("-----------------------------------------------------");

// const num1 = [1, 2, 3, 4, 5];
// const g1 = num1.includes(2, 1);
// const g2 = num1.includes(2, 2);
// console.log(g1);
// console.log(g2);

// const arr = [10, 20, 30, 40];
// //reduse(acc, item, index, arr)

// const arr2 = arr.reduce((acc, item) => acc + item, 20);
// console.log(arr2);

// console.log("-----------------------------------------------");

// function myFn(...sum) {
//   let sum1 = 20;

//   for (let val of sum) {
//     sum1 += val;
//   }
//   return sum1;
// }

// console.log(myFn(10, 20, 30, 40));

// console.log("------------------------------------------------");

// const words = ["hi", "my", "students"];

// const c1 = words.reduce((acc, curr) => acc + " " + curr + " ");
// console.log(c1);

// console.log("------------------------------------------------");

// const num2 = [10, 20, 40, 5, 21, 43];
// const maxNumber = num2.reduce((acc, val) => Math.max(acc, val, 0));
// console.log(maxNumber);

// const arr10 = [1, 2, 5, 3, 6, 43, 3];
// console.log(Math.max(...arr10));

// console.log("----------------------------------------------------");

// const arrA = ["Costa", "Bob", "John", "Alex"];
// const f1 = arrA.reduce((acc, item, index) => {
//   acc[index + 1] = item;
//   return acc;
// }, {});
// console.log(f1);

// const arr4 = Object.assign({}, arrA);
// console.log(arr4);

// const l1 = ["a1", "b1", "c1", 10];
// const reversed = l1.reverse();
// console.log(reversed);

// console.log("-----------------------------------------------");

// const rev = ["a", "b", "c", "d"];
// const rev1copy = rev.toReversed();
// console.log(rev1copy);
// console.log(rev);

// const b2 = [1, 2, 5, 3, 4];
// const b3 = b2.sort();
// console.log(b3);
// console.log(b2);

// console.log(Object.is(b2, b3));
// console.log(b2 === b3);

// console.log("---------------------------------------");

// const b4 = [1, 2, 19, 21, 31, 4, 8];
// const b5 = b4.sort((a, b) => a - b);

// console.log(b4);

// let str = ["A", "B", "a", "b", "c", "C"];
// str.sort();
// console.log(str);

// let objA = [
//   { name: "John", age: 45 },
//   { name: "Alica", age: 21 },
//   { name: "Costa", age: 17 },
//   { name: "Bob", age: 29 },
// ];
// objA.sort((a, b) => a.age - b.age);

// console.log(objA);

// console.log("-----------------------------------------------------");

// const num = [3, 7, 21, 54, 89, 32, 1, 9];
// const numCopy = num.toSorted((a, b) => a - b);
// console.log(num);
// console.log(numCopy);

// const k2 = [1, 2, 3, 4, 5];
// k2[1] = "hello";

// const k2Copy = k2.with(2, true);
// console.log(k2);
// console.log(k2Copy);

// let numbers = [2, 5, 3, 6, 4, 5, 2, 9];
// let sortElements = numbers.filter((num) => num % 2 === 0).sort((a, b) => a - b);
// console.log(sortElements);

// console.log("---------------------------------------------------");

// let names = ["katia", "kolia", "vania", "katia", "kolia"];
// let uniqNames = names.filter((item, index, arr) => arr.indexOf(item) === index);
// console.log(uniqNames);

// console.log("---------------------------------------------------");

// const numbers3 = [1, 3, 23, 1, 7, 56, 4, 21, 15, 30];
// let sum = numbers3
//   .filter((num) => num % 3 === 0)
//   .reduce((acc, curr) => acc + curr);
// console.log(sum);

// console.log("---------------------------------------------------");

// let w1 = ["apple", "banana", "grape", "cherry"];
// let str1 = w1.map((word) => word.toUpperCase()).toSorted();
// console.log(str1);

// let m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(m1);
// console.log(m1[0]);
// console.log(m1[2]);
// console.log(m1[1][1]);
// console.log(m1[2][2]);

// m1.push([10, 11, 12]);
// m1.pop();
// m1.pop();
// console.log(m1);

// console.log("--------------------------------------");

// const c1 = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// console.log(c1);
// console.log(c1[0][0]);
// console.log(c1[0][0][0]);

// c1[1].push([9, 10]);
// console.log(c1);

// console.log("-----------------------------------------------");

// // const c2 = c1.map((el) => el.map((val) => val.map((item) => item * 5)));
// // console.log(c2);

// for (let i = 0; i < c1.length; i++) {
//   for (let j = 0; j < c1[i].length; j++) {
//     console.log(c1[i][j]);
//   }
// }

// const arr = [1, 2, 3, 1, 2, 3];
// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(2));

// let number = [1, 2, 3, 4, 5];
// let n1 = number.some((num) => num % 2 === 0);
// console.log(n1);

// let number1 = [4, 30, 2, 52, 92, 74];
// let n2 = number1.every((num) => num % 2 === 0);
// console.log(n2);

// console.log("----------------------------------------------------------");

// let numA = [1, 3, 5, 7, 9];
// let a1 = numA.every((num) => num > 0);
// console.log(a1);

// console.log("---------------------------------------------------------");

// let words = ["apple", "banana", "orange"];
// let wordsEvery = words.every((word) => word.includes("a"));
// console.log(wordsEvery);

// const a2 = ["hello", "text", "html"];
// console.log(a2.includes("hello"));

// console.log("--------------------------------------------------");

// let mixArr = [1, "hello", 2, "world"];
// let allNum = mixArr.every((item) => typeof item === "number");
// console.log(allNum);

// const ages = [21, 29, 31, 45, 18];
// console.log(ages.indexOf(31));

// const index = ages.findIndex((item) => item >= 30 && item <= 40);
// console.log(index);

// console.log("-----------------------------------------");

// const user = [
//   { id: 1, name: "Costa" },
//   { id: 2, name: "Vova" },
//   { id: 3, name: "Bob" },
// ];

// const index1 = user.findIndex((user) => user.name === "Bob");
// console.log(index1);

// console.log("------------------------------------------");

// const numbers = [10, 20, 30, 50];
// const index2 = numbers.findIndex((num) => num > 100);
// console.log(index2);

// const arr = [1, 2, 3, [4, 5]];
// const arrCopy = arr.flat();
// console.log(arrCopy);
// console.log("---------------------------------------------");

// const arr1 = [1, [2, [3]]];
// const arr1Copy = arr1.flat(2);
// console.log(arr1Copy);

// console.log("---------------------------------------------");

// const arr3 = [1, 2, 3, [4, 5]];
// const arr3Copy = arr3.flat().map((num) => num * 2);
// console.log(arr3Copy);

// console.log("-----------------------------------------");

// const arr4 = [1, , , , , , , [20, 44]];
// const arr4Copy = arr4.flat();
// console.log(arr4Copy);

// const arr = [1, 2, 3, 4];
// //const arrCopy = arr.flat().map((el) => el * 2);
// const arrCopy = arr.flatMap((el) => el * 2);
// console.log(arrCopy);

// console.log("------------------------------------------------");

// const arr1 = [1, 2, 3, 4, 5];
// const arr1Copy = arr1.flatMap((num) => (num % 2 === 0 ? num : []));
// console.log(arr1Copy);

// const str = "Hello World";
// const arr = str.split(" ");
// console.log(arr);
// console.log("----------------------------------");

// const str1 = "apple,banana,kiwi";
// const arr1 = str1.split(",");
// console.log(arr1);
// console.log("-------------------------------------");

// const str3 = "apple,banana,kiwi";
// const arr3 = str3.split(",", 2);
// console.log(arr3);
// console.log("----------------------------------");

// const str4 = "JavaScript";
// const arr4 = str4.split("");
// console.log(arr4);
// console.log(arr4[2]);

// console.log("----------------------------------------");

// const arrStr = ["apple", "banana", "kiwi"];
// const strA = arrStr.join(" ");
// console.log(strA);

// console.log("---------------------------------------");

// const js = "javascript";
// const jsArr = js.split("");
// console.log(jsArr);
// const jsJoin = jsArr.join("");
// console.log(jsJoin);

// const arr = [1, 2, 3, 4, 5];
// const arrSum = arr.reduce((acc, b) => acc + b, 0);
// console.log(arrSum);

// function sum1(arr) {
//   return arr.reduce((acc, b) => acc + b, 0);
// }
// console.log(sum1(arr));

// console.log("---------------------------------------------------");

// const arr1 = [10, 89, 32, 43, 21];
// const max = Math.max(...arr1);
// console.log(max);

// const fnMax = (arr) => Math.max(...arr);
// console.log(fnMax(arr1));

// console.log("-----------------------------------------------------");

// const arr4 = [1, 2, 3];
// const arr5 = [4, 5, 6];
// const arr6 = [7, 8, 9, 10];
// function mergeFn(...arrey) {
//   return arrey.reduce((acc, value) => acc.concat(value));
// }

// console.log(mergeFn(arr4, arr5, arr6));

// const mergeCopy = arr4.concat(arr5, arr6);
// console.log(mergeCopy);

// const str1 = "The cat lazily stretched out in the sunbeam.";
// const str2 = "The cat lazily stretched out in the sunbeam outdoor.";

// const str3 = str1 + " " + str2;
// console.log(str3);

// console.log("-------------------------------------------");

// const str4 = "She found a handwritten note tucked inside an old book.";
// console.log(str4.length);

// console.log("-----------------------------------");

// const strOne = "Lorem ipsum";
// const firstChar = strOne[0];
// const lastChar = strOne[strOne.length - 1];

// console.log(firstChar);
// console.log(lastChar);
// console.log("------------------------------------------");

// const hello = "Hello, world";
// const chsrStr = hello.split(" ");
// console.log(chsrStr);

// chsrStr.push("!!!!!");
// console.log(chsrStr);

// const newStr = chsrStr.join("");
// console.log(newStr);

// console.log('-----------------------------------------');

// const arr = ["Hello", "world"];
// console.log(arr[0].toUpperCase());

// const str = "hello world";
// const strUpper = str.toUpperCase();
// const strLow = strUpper.toLowerCase();
// console.log(strUpper);
// console.log(strLow);

// console.log("------------------------------------------");

// const str1 = "Hello, world!";
// console.log(str1.slice(1, 5));

// console.log("------------------------------------------");

// const strM = "The storm ON clouds gathered ominously ON the horizon.";
// console.log(strM.replace("ON", "TRUE"));
// console.log(strM.replaceAll("ON", "TRUE"));

// console.log("----------------------------------------");
// const strM1 = "The storm ON clouds gathered ominously ON the horizon.";
// console.log(strM1, typeof strM1);

// const arr1 = [1, 2, 3, "hello", 4, 5, 6, "world"];
// console.log(arr1);
// console.log(typeof arr1);

// console.log("------------------------------------------");

// const obasRestyle = "His laughter echoed through the empty hallways.";
// console.log(obasRestyle.indexOf("the"));

// const name = "Costa";
// const greeting = `Hello ${name}`;
// console.log(greeting);

// const reversStr = (str) => str.split("").reverse().join("");
// console.log(reversStr("His laughter echoed through the empty hallways."));

// console.log("------------------------------------------------");
// function lgl(str) {
//   const words = str.split(" ");
//   let maxWords = 0;
//   for (let word of words) {
//     if (word.length > maxWords) {
//       maxWords = word.length;
//     }
//   }
//   return maxWords;
// }
// console.log(
//   lgl(
//     "Lorem ipsum fhjdkjfkghfkdjgkfdjhglfgj dolor sit amet consectetur adipisicing elit. Quasi accusamus consectetur saepe quibusdam ex mollitia sunt, beatae facere. Cupiditate iure maiores numquam recusandae voluptatibus placeat omnis debitis inventore distinctio nostrum."
//   )
// );

// const array = ["one", "two", "three"];
// const [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

// const array1 = ["one", "two", "three", true, false];
// const [a1, b1, c1, d, e] = array1;
// console.log(a1, b1, c1, d, e);

// console.log("---------------------------");

// const arr = [1, 2, 3, 4, 5, 6, "hi"];
// const [c2, c3, ...c4] = arr;
// console.log(c2, c3);
// console.log(c4);

// console.log("----------------------------");
// const arr2 = ["one", "two"];
// const [first, second, admin = true] = arr2;
// console.log(first, second);
// console.log(admin);

// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// console.log("----------------------------------");
// const arr = [23, 13, 231, 432, -443];
// const sum1 = (...arrg) => arrg.reduce((acc, c) => acc + c, 0);
// console.log(sum1(...arr));
// console.log(sum1(10, 20, -3));

// const arrNum = [11, 22, 33];
// const sum2 = (a1, b1, c1) => a1 + b1 + c1;
// console.log(sum2(...arrNum));
