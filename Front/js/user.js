import { createUserInfo, createOwnedCard } from "./utils/createHTML.js";
import { getProfile, baseUrl } from "./utils/service.js";

async function loadUser() {
  const response = await getProfile();

  if (response.status === 403) {
    localStorage.setItem("token", null);
    window.location.href = `${baseUrl}/PROJET%20D'AXE%20CDI/Front/html/login.html`; // si on est pas connecté on est redirigé vers la page login
  }

  const json = await response.json();
  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = createUserInfo(json.user);

  const ownedCard = document.getElementById("owned-cards-list");
  const data = json["ownedCards"];

  // console.log(data)

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    ownedCard.innerHTML += createOwnedCard(data[i])
  }
}

loadUser();

const signOutBtn = document.getElementById("sign-out");

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");

  window.location.href =
    "http://127.0.0.1/PROJET%20D'AXE%20CDI/Front/html/login.html";
});

