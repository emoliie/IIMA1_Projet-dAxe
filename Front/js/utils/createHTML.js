// toutes les fonctions qui permettent de créer des chaines de caractères qui contiennent du html
// ou directement des éléments HTML

// Retourne un élément div
export function createCard(character, callback) {
  // callback fonction appelée quand on clique sur la carte
  const div = document.createElement("div"); // crée un element div
  div.classList.add("item"); // ajoute une classe à la div
  div.onclick = function () {
    callback(character);
    //showPopup(character); // quand on clique sur la div appelle la fonction showPopup()
  };
  div.innerHTML = `<h3>${character.name}</h3>
          <img src="${character.image}" alt="${character.name}" />`;
  return div; // Crée une chaîne HTML qui affiche les infos des personnages
}

export function createCharacterInformation(character) {
  return `
        <div class="character-info">
          <h3>${character.name}</h3>
          <p>${character.eyes}</p>
          <p>${character.hairs}</p>
          <p>${character.birthday}</p>
          <p>${character.blood}</p>
          <p>${character.wand}</p>
          <p>${character.patronus}</p>
          <p>${character.role}</p>
          <p>${character.house}</p>
          <p>${character.actor}</p>
        </div>
  `;
}

// Retourne une chaîne représentant du HTML
export function createInfo(character) {
  return `
      <div class="left">
        <img src="${character.image}" alt="${character.name}" />
      </div>
      <div class="right">
        ${createCharacterInformation(character)}
        <div class="like" id="like-btn">
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    `;
}

export function createSolidHeart() {
  return `<i class="fa-solid fa-heart" style="color: #eee;"></i>`;
}

export function createRegularHeart() {
  return `<i class="fa-solid fa-heart"></i>`;
}

export function createUserInfo(user) {
  return `
    <h2>${user.name}</h2>
    <p>${user.email}</p>
  `;
}

/**
 * Permet d'obtenir le HTML suivant:
 *  <div class="container">
      <div class="card">
        <div class="front"></div>
        <div class="back">
          <h1>Back of Card</h1>
          <p>Additional info on the back of the card</p>
        </div>
      </div>
    </div>
 */
export function createRandomCard() {
  // Crée l'élément <div class="container"> </div>
  const container = document.createElement("div");
  container.classList.add("container");

  // Crée l'élément <div class="card"> </div>
  const card = document.createElement("div", { class: "card" });
  card.classList.add("card");

  // Crée l'élément <div class="front"> </div>
  const front = document.createElement("div", { class: "front" });
  front.classList.add("front");

  // Crée l'élément <div class="back"> </div>
  const back = document.createElement("div", { class: "back" });
  back.classList.add("back");

  // Injecte la div back et front dans card

  card.appendChild(back);
  card.appendChild(front);

  // Injecte card dans container
  container.appendChild(card);

  return container;
}

export function createFrontCard(character) {
  return `<h3>${character.name}</h3>
    <img src="${character.image}" alt="${character.name}" />`;
}

export function createFormValues(value) {
  return `<option value="${value}">${value}</option>`;
}

export function createOwnedCard(character) {
  return `<li class="card">
  <h3>${character.name}</h3>
  <img src="${character.image}" alt="${character.name}" />
  </li>`;
}
