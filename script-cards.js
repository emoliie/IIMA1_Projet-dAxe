// IMPLEMENTATION API

function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters/").then((response) =>
    response.json()
  );
}

async function displayCharacters() {
  try {
    const data = await fetchCharacters();
    // console.log(data);
    const charactersContainer = document.getElementById("characters-list");
    // Crée une chaîne HTML pour stocker les noms des personnages
    let htmlContent = "<div>";

    // Boucle à travers chaque personnage et ajoute son nom à la chaîne HTML
    data.forEach((person) => {
      htmlContent += `
      <div class="item ${person.house}">
        <h3>${person.name}</h3>
        <img src="${person.image}" alt="${person.name}" />
      </div>
      `;
    });
    htmlContent += "</div>";

    // Affiche la chaîne HTML dans la div
    charactersContainer.innerHTML = htmlContent;

    items = document.getElementsByClassName("item");
    loadShow();
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des personnages :",
      error
    );
  }
}

// CARROUSEL

let items = [];
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0; // on affiche la premire carte
function loadShow() {
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

displayCharacters();

// FILTRES

// Cette fonction filtre les éléments basés sur la classe spécifiée.
function filterSelection(selectedHouse) {
  // Obtient tous les éléments avec la classe 'item'.
  var items = document.getElementsByClassName("item");

  // Boucle à travers tous les éléments 'item'.
  for (var i = 0; i < items.length; i++) {
    // Si 'all' est sélectionné ou si l'élément contient la classe sélectionnée, affiche l'élément.
    if (selectedHouse === "all" || items[i].classList.contains(selectedHouse)) {
      items[i].style.display = "block";
    } else {
      // Sinon, cache l'élément.
      items[i].style.display = "none";
    }
  }

  // Écoute l'événement de chargement de la page pour filtrer tous les éléments par défaut.
  document.addEventListener("DOMContentLoaded", function () {
    filterSelection("all");
  });
}

// RECHERCHE

function initializeSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    // Utilise la valeur actuelle de l'input pour filtrer les personnages
    console.log(displayCharacters(searchInput.value.trim()));
    displayCharacters(searchInput.value.trim());
  });
}

// Assurez-vous que cette fonction est appelée pour initialiser l'écouteur d'événements
initializeSearch();
