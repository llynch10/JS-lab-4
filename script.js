"use strict";
// 1.
let total = 0;
let totalParagragh = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutsButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");

colaButton.addEventListener("click", () => {
  let amount = parseFloat(colaButton.getAttribute("data-amount"));
  total += amount;
  totalParagragh.innerText = `Total:$${total}`;
});

peanutsButton.addEventListener("click", () => {
  let amount = parseFloat(peanutsButton.getAttribute("data-amount"));
  total += amount;
  totalParagragh.innerText = `Total:$${total}`;
});

chocolateButton.addEventListener("click", () => {
  let amount = parseFloat(chocolateButton.getAttribute("data-amount"));
  total += amount;
  totalParagragh.innerText = `Total:$${total}`;
});

gummiesButton.addEventListener("click", () => {
  let amount = parseFloat(gummiesButton.getAttribute("data-amount"));
  total += amount;
  totalParagragh.innerText = `Total:$${total}`;
});

// 2.
let coins = 0;
let;
