"use strict";

import { $, $$ } from "../utils/dom.js";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Spät ändern", location: ".changeLanguage" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Ændre sprog", location: ".changeLanguage" },
    ],
  },
};

const locale = "da";

changeLan(locale);

function changeLan(loc) {
  texts[loc].texts.forEach((each) => {
    console.log(each);

    $(each.location).innerText = `${each.text}`;
  });
}

$(".selectLang").addEventListener("change", (event) => {
  changeLan(`${event.target.value}`);
});
