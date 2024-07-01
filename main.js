import { coffeeData } from "./data.js";

console.log(coffeeData);

// const coffeeContent = document.body.appendChild(document.getElementsByClassName(".productCardList"));

const selectedProducts = [];

const coffeeImg = document.createElement("img")
coffeeImg.src = coffeeData[1].img
document.querySelector("body").appendChild(coffeeImg);

// document.getElementsByClassName("addButton").addEventListener("cli")

// addButton.addEventListener("click", () => {
//     divConteinArraySelectedProducts.innerHTML = "";
//   });

// const cardList = 
//   selectedProducts.map() => {
// coffeeContent.innerHTML += ``
// }