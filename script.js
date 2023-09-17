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
console.log(random);

document.querySelector(".check").addEventListener("click", () => {
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
    }
    document.querySelector(".message").textContent = "correct answer found";
  } else if (guess > random) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "your guess is higher";
  } else {
    score--;
    document.querySelector(".score").textContent = score;

    document.querySelector(".message").textContent = "your guess is lower";
  }
});
