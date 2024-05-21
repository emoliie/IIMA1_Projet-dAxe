import { createCard, createInfo, createSolidHeart, createRegularHeart } from "./utils/createHTML.js";
import { getCharacters } from "./utils/service.js";

async function getData() {
  characters = await getCharacters();
  for (const character of characters) {
    // On remplit toutes les données
    data.push({
      character,
      html: createCard(character, showPopup),
    });
  }
}

function displayCharacters() {
  try {
    const charactersContainer = document.getElementById("characters-list");
    // Boucle à travers chaque personnage et ajoute son nom à la chaîne HTML
    charactersContainer.innerHTML = "";
    const div = document.createElement("div");

    activeCards.forEach(function (data) {
      // console.log(data);
      div.appendChild(data.html);
    });

    charactersContainer.appendChild(div);

    items = document.getElementsByClassName("item");
    loadShow();
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des personnages :",
      error
    );
  }
}

async function loadCards() {
  await getData();
  filterSelection("all");
  displayCharacters();
}

// CARROUSEL

let characters = []; // Informations des personnages
let data = []; // Toutes les données
let activeCards = []; // Cartes actives (basé sur data)
let items = []; // Tableaux des éléments (cartes)
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0; // on affiche la premire carte
function loadShow() {
  if (items.length == 0) return;
  items[active].style.transform = "none";
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  let factor = 0; // facteur = les cartes à droite et à gauche
  for (let i = active + 1; i < items.length; i++) {
    factor++;
    items[i].style.transform = `translateX(${120 * factor}px) scale(${
      1 - 0.2 * factor
    }) perspective(16px) rotateY(-1deg)`; //translateX deplace sur l'axe X, scale reduit l'echelle, etc
    items[i].style.zIndex = -factor; //decale les cartes en arriere
    items[i].style.filter = "blur(5px)"; //floute les cartes
    if (factor > 2) {
      // on veut 2 cartes à droite
      items[i].style.opacity = 0; // les cartes au delà des deux suivantes sont transparentes
    } else {
      items[i].style.opacity = 0.6; // les 2 cartes suivantes ont une opacité de 0.6
    } // items[i].style.opacity = factor > 2 ? 0 : 0.6;
  }

  factor = 0;
  for (let i = active - 1; i >= 0; i--) {
    factor++;
    items[i].style.transform = `translateX(${-120 * factor}px) scale(${
      1 - 0.2 * factor
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -factor;
    items[i].style.filter = "blur(5px)";
    if (factor > 2) {
      items[i].style.opacity = 0;
    } else {
      items[i].style.opacity = 0.6;
    }
    // items[i].style.opacity = factor > 2 ? 0 : 0.6;
  }
}

next.onclick = function () {
  if (active + 1 < items.length) {
    active = active + 1;
  } else {
    active = active;
  }

  loadShow();
};

prev.onclick = function () {
  if (active - 1 >= 0) {
    active = active - 1;
  } else {
    active = active;
  }

  loadShow();
};

loadCards();

// FILTRES

const all = document.querySelector(".All");
all.addEventListener("click", () => {
  filterSelection("all");
});

const gryffindor = document.querySelector(".Gryffindor");
gryffindor.addEventListener("click", () => {
  filterSelection("Gryffindor");
});

const slytherin = document.querySelector(".Slytherin");
slytherin.addEventListener("click", () => {
  filterSelection("Slytherin");
});

const ravenclaw = document.querySelector(".Ravenclaw");
ravenclaw.addEventListener("click", () => {
  filterSelection("Ravenclaw");
});

const hufflepuff = document.querySelector(".Hufflepuff");
hufflepuff.addEventListener("click", () => {
  filterSelection("Hufflepuff");
});

function filterSelection(selectedHouse) {
  activeCards = data.filter(
    // data = tableau, item = un element du tableau
    (item) => item.character.house == selectedHouse || selectedHouse === "all"
  );
  active = 0; // On remet la carte active à celle du début
  // console.log(activeCards);
  displayCharacters();
}

// RECHERCHE

function filterSelectionByCharacterName(name) {
  // Compare l'input avec le nom de chaque personnage en minuscule (pour éviter de comparer des majuscules et minuscule)
  activeCards = data.filter((item) =>
    item.character.name.toLowerCase().includes(name.toLowerCase())
  );
  active = 0; // On remet la carte active à celle du début
  displayCharacters();
}

function initializeSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const text = searchInput.value.trim();
    // Utilise la valeur actuelle de l'input pour filtrer les personnages
    filterSelectionByCharacterName(text);
  });
}
// cette fonction est appelée pour initialiser l'écouteur d'événements
initializeSearch();



// POPUP

function showPopup(character) {
  // fonction servant à afficher les infos des cartes dans le popup
  const popup = document.getElementById("card-popup");
  const info = document.getElementById("character-info");
  info.innerHTML = createInfo(character);
  popup.classList.toggle("show"); // fait apparaitre le popup qui est cachée
  

  fetch("http://127.0.0.1:3000/houses", {
    // va modifier la maison qui est stockée dans l'API avec la methode PATCH
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ house: character.house }),
  });

  const likeBtn = document.getElementById("like-btn");
  const regularHeart = document.querySelector(".fa-regular");
  

  if (regularHeart) {
    regularHeart.addEventListener("click", () => {
      likeBtn.innerHTML = createSolidHeart();
    });
  } 

  const solidHeart = document.querySelector(".fa-solid");
  
  if (solidHeart) {
    console.log(solidHeart)
    solidHeart.addEventListener("click", () => {
      likeBtn.innerHTML = createRegularHeart();
    });
  }

}

const closeBtn = document.querySelector(".close-btn");
const popup = document.getElementById("card-popup");

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
