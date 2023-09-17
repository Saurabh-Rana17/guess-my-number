"use strict";
console.clear();
// let a = document.querySelector(".message");
// console.log(a.textContent);
// document.querySelector(".message").textContent = "Correct Number";
// console.log(a.textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 12;
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameon = true;
console.log(random);
let handleAgain = () => {
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
  score = 20;
  gameon = true;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
let handleCheck = () => {
  if (gameon) {
    if (score === 0) {
      alert("game over");
      document.querySelector(".message").textContent = "game over";
      document.querySelector("body").style.backgroundColor = "red";
      return;
    }
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    if (!guess) {
      // alert("input is empty");
      document.querySelector(".message").textContent = "empty input";
    } else if (guess < 0 || guess > 20) {
      // alert("input is out of range 0 - 20");
      document.querySelector(".message").textContent = "input out of range";
    } else if (guess === random) {
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector(".number").style.width = "30rem";
      }
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = random;
      document.querySelector(".message").textContent = "correct answer found";
      gameon = false;
    } else if (guess > random) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "your guess is higher";
    } else {
      score--;
      document.querySelector(".score").textContent = score;

      document.querySelector(".message").textContent = "your guess is lower";
    }
  } else {
    alert("please start a new game");
  }
};

document.querySelector(".check").addEventListener("click", handleCheck);
document.querySelector(".again").addEventListener("click", handleAgain);
