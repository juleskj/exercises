import { $, $$ } from "/utils/dom.js";

// $$(".buttons button").forEach((button) => {
//   button.addEventListener("mousedown", startGame);
// });

$(".too_high").addEventListener("mousedown", tooHigh);
$(".too_low").addEventListener("mousedown", tooLow);
$(".correct").addEventListener("mousedown", correct);

// $(".too_low").addEventListener("mousedown", tooLow);

let computerGuess = Math.round(100);
let guesses = 0;

let guessTooLow = 100;
let lower = 0;

$(".start").addEventListener("mousedown", function () {
  console.log("start the game");

  $$(".buttons button").forEach((button) => {
    button.classList.remove("disabled");
  });

  $(".start").classList.add("disabled");
  computerGuess = 100;
  guesses = 0;

  computerGuess = Math.round(computerGuess / 2);
  guesses++;

  $(".computer_guess").textContent = `jeg gætter ${computerGuess}!`;
});

function tooHigh() {
  computerGuess = Math.round(computerGuess / 2);
  console.log("too high" + computerGuess);
  console.log(guesses);
  guesses++;
  $(".computer_guess").textContent = `jeg gætter ${computerGuess}!`;
}

function tooLow() {
  guesses++;



  guessTooLow = Math.round((100 - computerGuess) / 2);
  computerGuess = computerGuess + guessTooLow;
  console.log(computerGuess);
  console.log(guessTooLow);

  $(".computer_guess").textContent = `jeg gætter ${computerGuess}!`;
}

function correct() {
  $(".computer_guess").textContent = `yay jeg gættede det på ${guesses}!`;

  $$(".buttons button").forEach((button) => {
    button.classList.add("disabled");
  });

  $(".start").classList.remove("disabled");
}
