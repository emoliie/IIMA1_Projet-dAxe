// fonctions qui permettent de faire des requêtes

export const baseUrl = "http://127.0.0.1";

export async function getCharacters() {
  const response = await fetch("https://hp-api.lainocs.fr/characters/");
  return await response.json();
}

export async function getCharacterFromSlug(slug) {
  const response = await fetch(`https://hp-api.lainocs.fr/characters/${slug}`);
  return await response.json();
}

export async function getProfile() {
  // on obtient le profile du user connecté avec ses cartes possédées
  const token = localStorage.getItem("token"); // on récupere le token qu'on retrouve dans le localstorage

  const response = await fetch(`${baseUrl}:3000/getMyProfile`, {
    // on récupère les données du profile stockée dans l'API
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function login(email, password) {
  return await fetch(`${baseUrl}:3000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

export async function register(email, name, password) {
  return await fetch(`${baseUrl}:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      password,
    }),
  });
}

export async function getRandomCards() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}:3000/cards/draw`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function getUsers() {
  // on obtient tous les users inscrits
  const response = await fetch(`${baseUrl}:3000/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
