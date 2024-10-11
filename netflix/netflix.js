import { $, $$ } from "../utils/dom.js";

let isMoving;

window.addEventListener("mousemove", (event) => {
  console.log("is moving");

  window.clearTimeout(isMoving);

  // når musen bevæger sig skal dette gøres igen
  $(".progress-container").classList.remove("disappear");
  $(".progress-container").classList.add("appear");

  isMoving = setTimeout(function () {
    $(".progress-container").classList.remove("appear");
    $(".progress-container").classList.add("disappear");

    console.log("you not are moving");
  }, 3000); // tjekker hvert 3sekund om funktionen kører
});
