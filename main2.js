// function greet(){
//     console.log("Hello!");
// }

// greet();

// function fn1(){
//     const a = 5;
//     console.log(a);
// }
// fn1();

// function fn2(){
//     const a1 = 5;
//     let a2 = 30;
//     console.log(a1 + a2);
// }

// fn2();

// function fn3(){
//     const myName = "Bob";
//     console.log(`Hello ${myName}`);
// }
// fn3();

// function fn4(){
//     let a = 10;
//     let b = 15;
//     if (a < b) {
//         alert(`a less then b ${b - a}`);
//     } else {
//         alert(`b less then a ${a - b}`);
//     }
// }
// fn4();

// fn5();
// //dicloration
// function fn5(){
//     console.log(`number ${20+70}`);
// }
// fn5();
// //expretion
// const fn6 = function(){
//     console.log("hello");
// }
// fn6();

// const fn7 = function(){
//     let a = 20;
//     let c1 = 50;
//     console.log(c1 - a);
// }

// function fn8() {
//     console.log("Func fn8");
//     fn7();
// }

// fn8();

// console.log("------------------------------");

// function fn10(){
//     let a = 10;
//     if (a === 10){
//         console.log("hello");
//     }
// }
// fn10();
// fn10();
// fn10();
// fn10();
// console.log("---------------------------------");

// let a7 = 100;

// function fn11(){
//     if (a7 >= 100){
//         console.log("truth");
//     }
// }
// fn11();

// function greet(name, surename){
//     console.log(name, surename);

// }
// greet("Alina","Ovsianykova");

// function greet1(name = "alina",surename = "ovsia"){
//     console.log(name);
//     console.log(surename);
// }
// greet1("jon","hjkdjfhgl");

// const fn12 = function(a1,b1){
//     console.log(a1+b1);
// }
// fn12(20,20);
// fn12("hello","javascript");

// console.log("-----------------------------------------");

// const f13 = function(a1,b1,c1){
//     console.log(a1+b1+c1);
// }
// f13(10,15,13);

// console.log("-------------------");

// const fn14 = function(a1,a2,a3){
//     console.log(a1+a2+a3);
// }

// let num1 = 150, num2 = 250;

// fn14(20,num1*2,num2/3);

// console.log("------------");

// const h1 = document.querySelector("h1");
// console.log(h1);

// function fn16(){
//     h1.textContent = "Hello world!!!"
// }

// function fn17(){
//     h1.textContent = "JavaScript"
// }

// h1.addEventListener('mouseover',fn16);
// h1.addEventListener('mouseout',fn17);

// function fn19(a2, a3, a1 = "h1",){
//     document.querySelector(a1).textContent = 'Hello';
//     console.log(a2+a3);
// }
// fn19(20,20);

// function arg(){
//     console.log(arguments);
// }
// arg();
// arg(1,2,3);

// function count(){
//     console.log(arguments.length);
// }

// count(1,"hello",10,20);

// function fn25(){
//     let total = 0;

//     for(let i = 0; i < arguments.length;i++){
//         total = total + arguments[i];
//     }
//     return total;
// }
// console.log(fn25(5,5,5));

// function rs(...rest){
//     const ar = rest.reduce((acc,val)=>acc+val);
//     return ar;
// }
// console.log(rs(20,100));

// function fn30(a,b){
//     return a+b;
// }

// console.log(fn30(10,5));

// const result = fn30(50,50);
// console.log(result);

// console.log("--------------------------");

// function typeHandler(value){
//     if(typeof value === 'number'){
//         return 'Numbers'
//     } else if (typeof value === 'string'){
//         return 'String'
//     } else {
//         return 'Error'
//     }
// }
// let type = typeHandler(100);
// console.log(type);

// console.log("---------------------------------");

// function fnTest(){
//     let a = "hello world";
//     function innerFn(){
//         return a;
//     }
//     return innerFn();
// }

// let res1 = fnTest();

// console.log(res1);

// function fn31(a, b) {
//   const sum = a + b;
//   return sum;
// }

// console.log(fn31(20, 20));

// console.log(500 + fn31(2, 2));

// const fn32 = function (b, c) {
//   return b * c;
// };

// console.log(fn32(8, 8));

// const result = fn31(5, 8) + fn32(7, 9);
// console.log(result);

// console.log("-------------------");

// function myFn(value) {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(myFn(2));

// const g1 = myFn(55);
// const g2 = myFn(44);
// console.log(g1);
// console.log(g2);

// function test() {
//   return "hello";
// }

// console.log(test());

// function checkPos(number) {
//   if (number < 0) {
//     return "negative number";
//   }
//   return "positive number";
// }
// console.log(checkPos(-10));

// function fn1(p) {
//   const pass = "fhjdkshfkdshfkd29738243=-=-=120-03-.,l;,;lpduhskhfJHKHJHK";
//   let password = "";
//   for (let i = 0; i < p; i++) {
//     const randomIndex = Math.floor(Math.random() * pass.length);
//     password += pass[randomIndex];
//   }
//   return password;
// }
// const randomPassword = fn1(15);
// console.log(randomPassword);

// document
//   .querySelector(".randome-password")
//   .addEventListener("click", function () {
//     let inputPassValue = (document.querySelector(".puss-in").value = fn1(15));
//   });

// document.querySelector(".send").addEventListener("click", function () {
//   const inputs = document.querySelectorAll("input");
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].value = "";
//   }
//   console.log("empty");
// });

// function fnAdd(a, b) {
//   return a + b;
// }
// const result1 = fnAdd(2, 135);
// console.log(result1);

// const addArrow = (a, b) => {
//   return a + b;
// };
// console.log(addArrow(10, 30));

// const s1 = (a) => {
//   return a * a;
// };
// console.log(s1(8));

// const s11 = (a) => a * a;

// console.log(s1(5));

// const s2 = () => {
//   console.log("Hello world");
// };
// s2();

// const s3 = () => {
//   const s4 = () => {
//     console.log("i am function");
//   };
//   s4();
// };

// s3();

// const s5 = (num) => (num % 2 === 0 ? "liczba parzysta" : "liczba nie parzysta");
// console.log(s5(5));
// console.log(s5(6));

// function s6(num) {
//   if (num % 2 === 0) {
//     console.log("liczba parzysta");
//   } else {
//     console.log("liczba nie parzysta");
//   }
// }
// s6(8);

// function s7(num) {
//   return num % 2 === 0 ? "liczba parzysta" : "liczba nie parzysta";
// }
// console.log(s7(11));

// function myCall() {
//   console.log("Call back function was called");
// }

// const fn30 = function (callBack) {
//   console.log("Do something........");
//   callBack();
// };
// fn30(myCall);
// console.log("----------------------------------------------------");

// function testFn(city, country, callBack) {
//   if (callBack && typeof callBack === "function") {
//     callBack();
//   } else {
//     console.log(`city ${city} - country ${country}`);
//   }
// }
// testFn("London", "UK", function () {
//   console.log("Function doing right");
// });
// testFn("nikolaev", "ukraina", "hfjdskdhjf");

// console.log("------------------------------------------------------");

// const arr = [1, 2, 3, 4];
// console.log(arr.forEach((el) => console.log(el * 2)));
// console.log(arr.map((el) => el + 10));
// console.log(arr.filter((el) => el > 3));

// const myFn = function hello() {
//   console.log("Hello world!");
// };
// myFn();

// const numbers = [1, 2, 3];

// numbers.forEach(function (num) {
//   console.log(num + 20);
// });

// console.log("------------------------------------------");

// numbers.forEach((item) => console.log(item * 5));

// console.log("----------------------------------------");

// const add1 = function (a, b) {
//   return a + b;
// };
// console.log(add1(20, 20));

// const add2 = (a, b) => a + b;
// console.log(add2(30, 23));

// document.querySelector("h1").addEventListener("click", function () {
//   this.style.backgroundColor = "black";
// });

// console.log("------------------------------------");

// function calc(a, b, c) {
//   return a(b, c);
// }
// const result = calc(
//   function (x, y) {
//     return x * y;
//   },
//   20,
//   30
// );
// console.log(result);

// let global = "i am global variable";
// function myFunction() {
//   let global = "Hello";
//   let a = 20;
//   console.log(global);
//   console.log(a);
// }
// myFunction();
// console.log(global);

// function fn11() {
//   let a = "i am external variable";
//   function fn12() {
//     console.log(a);
//   }
//   return fn12;
// }

// const myFn = fn11();

// myFn();

// function g1(g) {
//   return function (name) {
//     console.log(g + "," + name);
//   };
// }
// const gHello = g1("hello");
// gHello("JavaScript");

// let message = "Hello Java Script";
// const myMessage = () => {
//   console.log(message);
// };
// myMessage();

// {
//   const hello = "hello";
//   console.log(hello);
//   {
//     const hello = "hello 1";
//     console.log(hello);
//     {
//       const hello = "hello 2";
//       console.log(hello);
//     }
//   }
// }

// function myMessage1() {
//   const message = "Hello JS";
//   console.log(message);

//   for (let i = 0; i <= 5; i++) {
//     const message = `cycle & ${i}`;
//     console.log(message);
//   }
// }
// myMessage1();

// console.log("--------------------------------");

// const hello = "hello!!!";
// function seyHello(message, count) {
//   const m = message;
//   let c1 = 0;
//   while (c1 < count) {
//     console.log(`${m}---${c1}`);
//     c1++;
//   }
// }
// seyHello(hello, 5);

// console.log("-------------------------------");

// function r1(a, b) {
//   return a * b;
// }
// console.log(r1(20, 30));
// const sum = r1(5, 9);
// console.log(sum);

// console.log("----------------------------------");

// function ageFn(age) {
//   if (typeof age !== "number") {
//     return "Wrong value!!!";
//   }
//   if (age < 1 || age > 140) {
//     return "Age like this doesnt exsit!!!";
//   }
//   if (age < 18) {
//     return "Minor";
//   }
//   return "You were validated)))";
// }

// console.log(ageFn(7));
// console.log(ageFn(-2));
// console.log(ageFn("hi"));
// console.log(ageFn(27));

function sumFn(a, b) {
  console.log(a + b);
}
sumFn(5, 10);

const sumFn1 = function (a, b) {
  return a + b;
};
console.log(sumFn1(5, 5));

const sumFn2 = (a, b) => a + b;
console.log(sumFn2(3, 3));

console.log("----------------------------------------------------");

function evenOddFn(number) {
  if (number % 2 === 0) {
    console.log(`Number ${number} is even`);
  } else if (typeof number !== "number") {
    console.log(`${number} isnt a number!!!`);
  } else console.log(`Number ${number} is odd`);
}
evenOddFn(4);
evenOddFn(3);
evenOddFn("hi");
console.log("-------------------------------------------------------");

function lengthFn(str) {
  return str.length;
}
let l = lengthFn("hjdkjhfkdsjhf");

console.log(l);
