/*let moms;

let beloeb;

// function percentMaker(moms) {
//   return `${parseFloat(moms).toFixed(2)}%`;
// }
beregnMoms(25, 200);

function beregnMoms(moms, beloeb) {
  let payMoms = moms * beloeb;

  console.log(moms);
  console.log("du skal betale:" + payMoms + "efter moms");
}

*/

"use strict";
function gretting(firstName) {
  return `hello ${firstName}`;
}

const txt = `gretting is ${gretting("sven")}`;
//en måde at sende en value til firstname
const result = gretting("julie");

console.log(result);

//anden måde at tjekke værdig på
console.log(gretting("ben"));
