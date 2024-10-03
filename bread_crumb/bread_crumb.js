import { $, $$ } from "../utils/dom.js";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

$(".generate").addEventListener(
  "mousedown",
  () => {
    return generateBC(bc);
  },
  { once: true }
);

function generateBC(arr) {
  arr.forEach((each, index) => {
    $("nav").innerHTML +=
      index === arr.length - 1
        ? `<p>${each.name}</p>`
        : `<a href=${each.link}>${each.name}/</a>`;
  });
}

document.querySelector("element").addEventListener("event", funktion);
