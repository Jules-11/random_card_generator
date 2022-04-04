/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let dealNewCard = () => {
  let suit = Math.floor(Math.random() * 4);
  let number = Math.floor(Math.random() * 12);
  let arrSuit = [
    "bi-suit-spade-fill",
    "bi-suit-club-fill",
    "bi-suit-heart-fill",
    "bi-suit-diamond-fill"
  ];
  let arrNumber = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let topSuit = document.getElementById("topSuit");
  let cardNumber = document.getElementById("cardNumber");
  let bottomSuit = document.getElementById("bottomSuit");

  cardNumber.innerHTML = arrNumber[number];
  topSuit.removeAttribute("class");
  bottomSuit.removeAttribute("class");
  topSuit.classList.add("bi");
  bottomSuit.classList.add("bi");
  topSuit.classList.add(arrSuit[suit]);
  bottomSuit.classList.add(arrSuit[suit]);

  if (
    arrSuit[suit] == "bi-suit-spade-fill" ||
    arrSuit[suit] == "bi-suit-club-fill"
  ) {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
    cardNumber.style.color = "black";
  } else {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    cardNumber.style.color = "red";
  }
};

window.onload = function() {
  dealNewCard();

  let buttonClick = document.getElementById("btn");
  buttonClick.addEventListener("click", dealNewCard);
};
