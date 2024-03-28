// IMPLEMENTATION API

function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters/").then((response) =>
    response.json()
  );
}

async function getData() {
  characters = await fetchCharacters();
  for (const character of characters) {
    // On remplit toutes les données
    data.push({
      character,
      html:createCard(character)
    });
  }
}

function createCard(character) {
// Crée une chaîne HTML pour stocker les noms des personnages
  return `
      <div class="item">
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}" />
      </div>
  `;
}

function displayCharacters() {
  try {
    const charactersContainer = document.getElementById("characters-list");
    // Boucle à travers chaque personnage et ajoute son nom à la chaîne HTML
    let html = "<div>"
    activeCards.forEach((data) => {
      html += data.html;
    });
    html += "</div>"

    charactersContainer.innerHTML = html

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
  if (active + 1 >= 0) {
    active = active - 1;
  } else {
    active = active;
  }

  loadShow();
};

loadCards();

// FILTRES

function filterSelection(selectedHouse) {
  activeCards = data.filter((item) => item.character.house == selectedHouse || selectedHouse === "all");
  active = 0; // On remet la carte active à celle du début
  displayCharacters();
}

function filterSelectionByCharacterName(name) {
  // Compare l'input avec le nom de chaque personnage en minuscule (pour éviter de comparer des majuscules et minuscule)
  activeCards = data.filter((item) => item.character.name.toLowerCase().includes(name.toLowerCase()));
  active = 0; // On remet la carte active à celle du début
  displayCharacters();
}

// RECHERCHE

function initializeSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const text = searchInput.value.trim();
    // Utilise la valeur actuelle de l'input pour filtrer les personnages
    filterSelectionByCharacterName(text);
  });
}

// Assurez-vous que cette fonction est appelée pour initialiser l'écouteur d'événements
initializeSearch();