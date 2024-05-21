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
        <div class="left">
          <img src="${character.image}" alt="${character.name}" />
        </div>
        <div class="right">
          <div class="character-info">
            <h1>${character.name}</h1>

              <div class="info">
                <p class="key">Eye color:</p>
                <p class="value">${character.eyes}</p>
              </div>
            
              <div class="info">
                <p class="key">Hair Color:</p>
                <p class="value">${character.hairs}</p>
              </div>
            
              <div class="info">
                <p class="key">Birthday:</p>
                <p class="value">${character.birthday}</p>
              </div>
              
              <div class="info">
                <p class="key">Blood:</p>
                <p class="value">${character.blood}</p>
              </div>
              
              <div class="info">
                <p class="key">Wand:</p>
                <p class="value">${character.wand}</p>
              </div>
              
              <div class="info">
                <p class="key">Patronus:</p>
                <p class="value">${character.patronus}</p>
              </div>
              
              <div class="info">
                <p class="key">Role:</p>
                <p class="value">${character.role}</p>
              </div>
              
              <div class="info">
                <p class="key">House:</p>
                <p class="value">${character.house}</p>
              </div>
              
              <div class="info">
                <p class="key">Actor:</p>
                <p class="value">${character.actor}</p>
              </div>
              
          </div>
        </div>
  `;
}

// Retourne une chaîne représentant du HTML
export function createInfo(character,liked) {
  return `
      <div class="left">
        <img src="${character.image}" alt="${character.name}" />
      </div>
      <div class="right">
        <div class="info" id="info">
          <h3>${character.name}</h3>
          <p>${character.house}
        </div>

        <div class="bottom">
          <a id="learn-more" href="http://127.0.0.1/PROJET%20D'AXE%20CDI/Front/html/character.html?slug=${character.slug}">Learn More &gt;</a>
          <div class="like" id="like-btn">
            <i class="${liked ? "fa-solid" : "fa-regular"} fa-heart"></i> 
          </div>
        </div>
      </div>
    `;
} // ternary operator : condition ? true : false

export function createSolidHeart() {
  return `<i class="fa-solid fa-heart" style="color: #eee;"></i>`;
}

export function createRegularHeart() {
  return `<i class="fa-regular fa-heart"></i>`;
}

export function createUserInfo(user) {
  return `
    <h2>${user.name}</h2>
    <p>${user.email}
  `;
}

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
