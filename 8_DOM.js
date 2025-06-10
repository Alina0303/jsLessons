"use strict";

// const titleH1 = document.getElementById("title");

// console.log(titleH1);

// console.log(document.getElementById("title"));
// console.log(document.querySelector("p"));

// const p = document.querySelectorAll("p");
// console.log(p);

// Array.from(p).forEach((el) => {
//   el.textContent = "Hello";
// });

// console.log("------------------------");

// for (let val of p) {
//   console.log(val);
//   val.innerHTML = "<b>Hello world</b>";
// }

// for (let val of p) {
//   console.log(val);
//   val.innerText = "Hi Alina";
// }

// console.log(document.getElementsByClassName("d1"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelectorAll("p"));

// console.log(document.querySelector(".d1"));
// console.log(document.querySelector("#title"));

//onsole.log('******************************************************');

// const titleH1 = document.querySelector(".title");
// const input = document.querySelector(".input");

// function myFn() {
//   //titleH1.textContent = "мы нажали на кнопку";
//   this.textContent = "мы нажали на кнопку";
// }

// titleH1.addEventListener("click", myFn);

// function fn1() {
//   titleH1.style.color = "white";
// }
// function fn2() {
//   titleH1.style.color = "yellow";
// }

// titleH1.addEventListener("mouseover", fn1);
// titleH1.addEventListener("mouseout", fn2);

// console.log("-------------------------------------------------");

// input.addEventListener("input", function (event) {
//   titleH1.textContent = event.target.value;
//   if (input.value === "") {
//     titleH1.textContent = "DOM";
//   }
// });

// console.log("--------------------------------------");

// function randomColor() {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);

//   this.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }

// const body = document.querySelector("body");

// //body.addEventListener("click", randomColor);

// document.querySelector("body").addEventListener("click", randomColor);

// console.log("************************************************************");

// let newElement = document.createElement("div");
// newElement.textContent = "Новый елемент";

// let parentElement = document.querySelector(".wrapper");
// //parentElement.appendChild(newElement);
// //parentElement.prepend(newElement);
// //parentElement.removeChild(newElement);

// const h1 = document.querySelector(".h1");

// let parentH1 = h1.parentNode;
// console.log(parentH1);

//console.log("--------------------------------------------------------");

// let text = document.querySelector(".wrapper");
// text.insertAdjacentHTML(
//   "beforebegin",
//   `
//   <div>New element befor element</div>`
// );
// text.insertAdjacentHTML(
//   "afterbegin",
//   `
//   <div>New element at the start of element</div>`
// );
// text.insertAdjacentHTML(
//   "beforeend",
//   `
//   <div>New element at the end of element</div>`
// );
// text.insertAdjacentHTML(
//   "afterend",
//   `
//   <div>New element after element</div>`
// );

//console.log("********************************************************");

// const h1Title = document.querySelector(".h1");
// const input = document.querySelector(".input");
// const btn = document.querySelector(".btn");
// const add = document.querySelector(".add");

// h1Title.addEventListener("click", function () {
//   h1Title.classList.add("color-blue");
//   //input.classList.remove("red");
//   input.remove();
// });

// h1Title.addEventListener("click", function () {
//   input.classList.toggle("red");
// });

// h1Title.addEventListener("click", function () {
//   if (input.classList.contains("input")) {
//     document.querySelector("body").style.backgroundColor = "red";
//   } else {
//     document.querySelector("body").style.backgroundColor = "green";
//   }
// });

// const arr = ["apple", "house", "car"];

// function getRandomWord() {
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   let randomWord = arr[randomIndex];
//   return randomWord;
// }
// console.log(getRandomWord());

// btn.addEventListener("click", function () {
//   h1Title.textContent = getRandomWord();
// });

// add.addEventListener("click", function () {
//   arr.push(input.value);
//   input.value = "";
//   console.log(arr);
// });

// console.log("*****************************************************");

// const d1 = document.querySelector(".d1");
// const d2 = document.querySelector(".d2");
// const d3 = document.querySelector(".d3");

// function randomColor(content) {
//   let red = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   content.style.backgroundColor = `rgb(${red} ${blue} ${green})`;
// }

// d1.addEventListener("click", function () {
//   randomColor(d1);
//   console.log("Сработало событие на родителском елементе DIV 1");
// });
// d2.addEventListener("click", function () {
//   randomColor(d2);
//   console.log("Сработало событие на дочернем елементе DIV 2");
// });
// d3.addEventListener("click", function () {
//   randomColor(d3);
//   console.log("Сработало событие на дочернем елементе DIV 3");
// });

// console.log("---------------------------------------------------------------");

// window.addEventListener("keypress", function (event) {
//   console.log(event.key);
// });

// const input = document.querySelector(".input");
// const list = document.querySelector(".d6");

// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter" && input.value.trim() !== "") {
//     const testText = input.value.trim();
//     input.value = "";

//     const div = document.createElement("div");
//     div.textContent = testText;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.classList.add("delete");

//     div.append(deleteBtn);

//     list.append(div);
//   }
// });

// list.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// });

// console.log("-------------------------------------------------");

// const parentElement = document.querySelector(".wrapper");
// parentElement.addEventListener("click", function (event) {
//   if (event.target.classList.contains("h1")) {
//     console.log("нажат елемент с классом h1");
//   }
// });

// console.log("--------------------------------------------------");

// const links = document.querySelectorAll(".link");
// console.log(links);

// // links.forEach((el) => {
// //   el.addEventListener("click", function (e) {
// //     e.preventDefault();
// //     el.classList.toggle("k1");
// //   });
// // });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("link")) {
//     e.target.classList.toggle("k1");
//   }
//   console.log("ссылка кликнута");
// });

// console.log("***********************************************************");

// document.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.querySelector(".h1");
//   h1.textContent = "DOM loaded";
// });

// console.log("**************************************************************");

// const link = document.querySelector(".link");
// link.setAttribute("href", "https://www.youtube.com/watch?v=OdWyL8H0grs");

// const h1 = document.querySelector(".h1");
// h1.setAttribute("class", "title");
// h1.setAttribute("data-", "price");

// console.log("---------------------------------------------------------------");

// const getAttribute = link.getAttribute("href");
// console.log(getAttribute);

// console.log(h1.getAttribute("data-"));

// console.log("***************************************************************");

// const userElement = document.querySelector(".user");

// console.log(userElement.dataset.age);
// console.log(userElement.dataset.name);

// const myName = userElement.dataset.name;
// console.log(myName);

// console.log("-----------------------------------------------");

// const btn = document.querySelector(".btn");
// const parent = btn.closest(".d1");

// parent.addEventListener("click", () =>
//   console.log("кликнули на родителя с классом d1")
// );
