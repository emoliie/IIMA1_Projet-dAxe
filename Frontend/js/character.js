import { createCharacterInformation } from "./utils/createHTML.js";
import { getCharacterFromSlug } from "./utils/service.js";

//const url = new URL(window.location.href);
const queryString = new URLSearchParams(window.location.search);
const param = queryString.get("slug");

if (!param) {
  window.location.href = "${baseUrl}/Frontend/pages/cards.html";
}

async function loadCharacter(param) {
  const data = await getCharacterFromSlug(param);
  const characterPage = document.getElementById("character");
  const title = document.getElementById("title");

  characterPage.innerHTML = createCharacterInformation(data);
  title.innerHTML = `${data.name}`;
}

loadCharacter(param);
