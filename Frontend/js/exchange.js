import { createFormValues } from "./utils/createHTML.js";
import { getProfile, getUsers } from "./utils/service.js";

async function loadValues() {
  const res = await getProfile();
  const message = document.getElementById("message");
  const exchangeBtn = document.getElementById("exchange-btn");

  if (res.status !== 200) {
    message.innerHTML = "Please log in first.";
    exchangeBtn.remove();
    return;
  }

  const response = await getUsers();
  const usersJson = await response.json(); // json = array
  const usersValues = document.getElementById("users-list");

  for (let i = 0; i < usersJson.length; i++) {
    usersValues.innerHTML += createFormValues(usersJson[i].email);
  }

  const cardsValues = document.getElementById("cards-list");
  const cardsJson = await res.json();
  const data = cardsJson["ownedCards"];

  for (let i = 0; i < data.length; i++) {
    cardsValues.innerHTML += createFormValues(data[i].name);
  }
}

loadValues();
