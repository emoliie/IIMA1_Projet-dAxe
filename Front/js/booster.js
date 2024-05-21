import { getProfile, getRandomCards } from "./utils/service.js";
import { createRandomCard, createFrontCard } from "./utils/createHTML.js";

async function isLogged() {
  // Vérifie si l'utilisateur est authentifié (via localstorage) et authentifiable (via API)
  // Si l'une des deux conditions n'est pas respecté on redirige

  // Vérification authentification (profile obtenable via call API getMyProfile)

  const response = await getProfile();
  const message = document.getElementById("message");

  const cards = document.querySelector(".cards");
  const drawBtn = document.getElementById("draw-btn");

  for (let a = 0; a < 5; a++) {
    // on affiche 5 cartes face cachées dans dans la div de classe .cards
    const hiddenCards = createRandomCard();
    cards.appendChild(hiddenCards);
  }

  if (response.status !== 200) {
    message.innerHTML = "Please log in first.";
    drawBtn.remove();
    return;
  }

  const json = await response.json();

  if (json.user.remainingDraw <= 0) {
    // on verifie la condition tant que le user peut encore draw
    message.innerHTML = "You can't draw anymore.";

    drawBtn.remove();

    return;
  }

  const container = document.querySelectorAll(".container");

  drawBtn.onclick = async (event) => {
    // on ajoute un ecouteur d'evenement au clique sur le bouton draw

    const drawnCards = await getRandomCards(); // dranCards == objet // on recupere les 5 cartes qui ont été tirées
    console.log(drawnCards);

    drawBtn.remove();

    for (let b = 0; b < container.length; b++) {
      // pour chaque cartes de classe container on passe l'index b
      container[b].classList.add("flipped");

      const card = container[b].firstChild;
      const front = card.lastChild;
      const character = drawnCards.card[b]; // objects.tableau[i]

      console.log(character);

      front.innerHTML = createFrontCard(character);

      await sleep(100);
    }
  };
}

isLogged();

function sleep(ms) {
  // fonction qui permet d'attendre
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
