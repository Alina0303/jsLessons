"use strict";

// console.log(new Date());

// const date = new Date();
// console.log(date);

// const date1 = new Date(1998, 2, 3);
// console.log(date1);

// console.log("-------------------------------");

// const date2 = new Date();
// const year = date2.getFullYear();
// console.log(date2);
// console.log(`Year ${year}`);

// const month = date2.getMonth();
// console.log(`Month is ${month}`);

// const hours = date2.getHours();
// console.log(`Hours ${hours}`);

// const minutes = date2.getMinutes();
// console.log(`Minutes ${minutes}`);

// const seconds = date2.getSeconds();
// console.log(`hours ${hours} minutes ${minutes} seconds ${seconds}`);

// const millisecpnds = date2.getMilliseconds();
// console.log(`${hours}:${minutes}:${seconds}:${millisecpnds}`);

// const dayOfWeek = date2.getDay();
// console.log(`Day number ${dayOfWeek}`);

// console.log("------------------------------------");

// const date3 = new Date();

// date3.setFullYear(2026);
// date3.setMonth(11);
// date3.setHours(2);
// date3.setMinutes(59);
// date3.setSeconds(59);
// date3.setMilliseconds(800);
// console.log(date3);

// console.log('-------------------------------------');

// const date = new Date();
// date.setDate(date.getDate() + 10);
// date.setMonth(date.getMonth() - 5);

// console.log(date);

// console.log("--------------------------------------");

// const date1 = new Date();
// console.log(date1);

// const date2 = date1.toISOString().slice(0, 10);
// console.log(date2);
// const date3 = date2.toString();
// console.log(date3);

// console.log('---------------------------------------');

// const date = new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString("pl-PL"));
// console.log(date.toLocaleDateString("ua-UA"));
// console.log(date.toLocaleDateString("uk-UK"));
// console.log(date.toLocaleDateString("en-Us"));
// console.log(date.toLocaleDateString("zh-CN"));

// console.log("-----------------------------------------");

// const date1 = new Date();

// console.log(
//   date1.toLocaleDateString("pl-PL", {
//     //weekday: "long",
//     //weekday: "narrow",
//     weekday: "short",
//     year: "numeric",
//     month: "narrow",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "numeric",
//     second: "2-digit",
//     timeZoneName: "short",
//   })
// );

// console.log('----------------------------------------');

// const date = new Date();
// console.log(date.toLocaleDateString());

// console.log(
//   date.toLocaleString("ru-RU", {
//     weekday: "long",
//     year: "numeric",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   })
// );

// console.log("----------------------------------------");

// function fn1() {
//   console.log("Hello world!");
// }

// setTimeout(fn1, 1000);

// setTimeout(function () {
//   console.log("Siema,świat)");
// }, 2000);

// function fn2(name) {
//   console.log(`Hi ${name}`);
// }

// const myName = "Alina";

// setTimeout(fn2, 3000, myName);

// console.log('--------------------------------------------------');

// function sayHi() {
//   console.log("JavaScript");
// }
// setTimeout(sayHi, 2000);
// setTimeout(sayHi, 3000);

// const time1 = setTimeout(sayHi, 4000);
// clearTimeout(time1);

// console.log('------------------------------------------------');

// function s1() {
//   console.log("1");
// }
// function s2() {
//   console.log("2");
// }
// function s3() {
//   console.log("3");
// }

// setTimeout(() => console.log("4"), 4000);

// function s5() {
//   console.log("5");
// }

// const s1Function = setTimeout(s1, 1000);
// const s2Function = setTimeout(s2, 2000);
// const s3Function = setTimeout(s3, 3000);
// const s5Function = setTimeout(s5, 5000);

// clearTimeout(s3Function);

// console.log('---------------------------------------------------');

// function fn1(par) {
//   const n = document.querySelector(".d1");
//   n.textContent = par;
//   setTimeout(() => n.remove(), 3000);
// }
// fn1("Hello world!");

// setTimeout(() => {
//   window.location.href = "https://www.youtube.com/";
// }, 2000);

// console.log("---------------------------------------------------");

// function fn4() {
//   const time = new Date();
//   const hours = time.getHours().toString().padStart(2, "0");
//   const minute = time.getMinutes().toString().padStart(2, "0");
//   const second = time.getSeconds().toString().padStart(2, "0");

//   const d1 = document.querySelector(".d1");
//   d1.textContent = `${hours}:${minute}:${second}`;
// }
// fn4();

// console.log('--------------------------------------------');

// const num = "9";
// const numUpdate = num.padStart(3, "0");

// console.log(numUpdate);

// const card = "3188";
// const cardUpdate = card.padStart(16, "*");

// console.log(cardUpdate);

// console.log('------------------------------------------');

// const lang = "JavaScript";

// const fn1 = () => console.log(`Hello ${lang}`);

// setInterval(fn1, 1000);
// setInterval(() => console.log(`1 sec left`), 1000);

// console.log('------------------------------------------------');

// const f1 = (name) => console.log(`hello ${name}`);
// const userName = "John";
// setInterval(f1, 1500, userName);

// function printMessage() {
//   console.log("Hello World!");
// }

// const p = setInterval(printMessage, 1000);

// setTimeout(() => {
//   clearInterval(p);
//   console.log("6 sec left");
// }, 6000);

// console.log('-----------------------------------------------');

// function b1(el) {
//   let bol = true;

//   function t1() {
//     bol = !bol;
//     el.style.opacity = bol ? 1 : 0;
//     setTimeout(t1, 500);
//   }
//   t1();
// }

// const cursorE1 = document.querySelector("h1");

// b1(cursorE1);

// console.log('-----------------------------------------------');

// function randomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function color2() {
//   const colorBody = document.querySelector("body");
//   colorBody.style.backgroundColor = randomColor();
// }

// setInterval(color2, 500);

// console.log('---------------------------------------------------');

// const number = 123456.78;
// const pl = new Intl.NumberFormat("pl-PL").format(number);
// const usa = new Intl.NumberFormat("en-US").format(number);
// const germany = new Intl.NumberFormat("de-DE").format(number);
// const austria = new Intl.NumberFormat("de-AT").format(number);

// console.log(`Poland ${pl}`);
// console.log(`USA ${usa}`);
// console.log(`Germany ${germany}`);
// console.log(`Austria ${austria}`);

// const locales = [
//   "en-US", //usa
//   "de-DE", //germany
//   "ru-RU", //russia
//   "pl-PL", //poland
//   "uk-UA", //ukraine
//   "ar",
//   "fr-FR", //franch
//   "hi-IN", //india
//   "zh-CN", //chiny
// ];

// const number1 = 1234567.89;

// const format1 = locales.map((el) => Intl.NumberFormat(el).format(number1));

// console.log(format1.join("\n"));

// console.log("------------------------------------------------------");

// const number2 = 0.12345;
// const format2 = locales.map((el) =>
//   new Intl.NumberFormat(el, {
//     style: "percent",
//     minimumFractionDigits: "2",
//   }).format(number2)
// );

// console.log(format2.join("\n"));

// console.log("----------------------------------------------");

// const money = 222.35;

// const format3 = locales.map((el) =>
//   new Intl.NumberFormat(el, {
//     style: "currency",
//     currency: "USD",
//   }).format(money)
// );

// console.log(format3.join("\n"));

// console.log("-------------------------------------------");

// const date = new Date();
// const newDate = locales.map((el) => new Intl.DateTimeFormat(el).format(date));

// console.log(newDate.join("\n"));

// console.log("-------------------------------------");

// const date1 = new Date();

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// const newDate1 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options).format(date1)
// );
// console.log(newDate1.join("\n"));

// console.log("-------------------------------------------");

// const date2 = new Date();

// const options2 = {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// };

// const newDate2 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options2).format(date2)
// );

// console.log(newDate2.join("\n"));

// console.log("--------------------------------------------");

// const date3 = new Date();

// const options3 = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// };

// const newDate3 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options3).format(date3)
// );

// console.log(newDate3.join("\n"));

// console.log("-------------------------------------------");

// function updateTime() {
//   const curentDate = new Date();
//   const options = {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   const timeFormat = new Intl.DateTimeFormat("default", options);

//   const formatDateTime = timeFormat.format(curentDate);

//   const timeDiv = document.querySelector(".d1");
//   timeDiv.textContent = formatDateTime;
// }

// setInterval(updateTime, 1000);

// console.log("-----------------------------------------");

// const a1 = new Date();

// console.log(a1);
// console.log(a1.getUTCHours());
// console.log(a1.getUTCMonth());

// const utcDate = new Date(Date.UTC(2025, 5, 2, 14, 18, 0));
// const utcCopy = utcDate.toUTCString();
// console.log(utcCopy);

// console.log("------------------------------------------");

// const b2 = new Date();
// const b3 = new Intl.DateTimeFormat("ru-RU", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// }).format(b2);
// console.log(b2);
// console.log(b3);

// console.log("----------------------------------------------");

const { Temporal } = require("temporal-polyfill");
// console.log(Temporal.Now.instant().toString());
// console.log(Temporal.Now.instant().toLocaleString());

// const dat = Temporal.PlainMonthDay.from({
//   month: 5,
//   day: 3,
// });
// console.log(dat.toString());

// console.log("-----------------------------------------------");
// const year = 2025;
// const month = 6;

// const date = new Temporal.PlainYearMonth(year, month);
// console.log(date.toString());

// const plainDate = new Temporal.PlainDate(2025, 6, 15);
// const year = plainDate.year;
// const month = plainDate.month;
// const day = plainDate.day;

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);

// const plainTime = new Temporal.PlainTime(15, 5, 32, 500);

// const hour = plainTime.hour;
// const minute = plainTime.minute;
// const second = plainTime.second;
// const millisecond = plainTime.millisecond;

// console.log(`Hour:${hour}`);
// console.log(`Minute:${minute}`);
// console.log(`Second:${second}`);
// console.log(`Millisecond:${millisecond}`);

// const plainDateTime = new Temporal.PlainDateTime(2025, 6, 25, 15, 13, 10);
// console.log(
//   `year:${plainDateTime.year} month:${plainDateTime.month} day:${plainDateTime.day} hour:${plainDateTime.hour} minute:${plainDateTime.minute} second:${plainDateTime.second}`
// );

// const now = Temporal.Now.instant();
// console.log(now.toLocaleString());
