import { createCharacterInformation } from "./utils/createHTML.js";
import { getCharacterFromSlug } from "./utils/service.js";

//const url = new URL(window.location.href);
const queryString = new URLSearchParams(window.location.search);
const param = queryString.get("slug");

if (!param) {
  window.location.href =
    "http://127.0.0.1/PROJET%20D'AXE%20CDI/Front/html/cards.html";
}

async function loadCharacter(param) {
  const data = await getCharacterFromSlug(param);
  const characterPage = document.getElementById("character");
  characterPage.innerHTML=createCharacterInformation(data)
}

loadCharacter(param);