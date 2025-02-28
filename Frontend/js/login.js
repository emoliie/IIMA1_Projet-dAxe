import { baseUrl, login, register } from "./utils/service.js";

const token = localStorage.getItem("token");

if (token) {
  window.location.href = `${baseUrl}:5500/Frontend/pages/user.html`;
}

// ANIMATION

const box = document.getElementById("box");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  box.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  box.classList.remove("active");
});

// LOGIN

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const username = document.getElementById("register-username");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await login(loginEmail.value, loginPassword.value);

  if (response.status !== 200) {
    //alert("Connection failed");
    loginMessage.innerHTML = "<p>Failed to connect</p>";
    return;
  }

  const result = await response.json();

  localStorage.setItem("email", loginEmail.value);

  const token = result.token;

  localStorage.setItem("token", token);

  window.location.href = `${baseUrl}:5500/Frontend/pages/user.html`;
});

const storedEmail = localStorage.getItem("email"); // obtient le mail stocké dans le localstorage

if (storedEmail) {
  loginEmail.value = storedEmail;
} else {
  console.log("No email found in localstorage");
}

// REGISTER

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await register(
    registerEmail.value,
    username.value,
    registerPassword.value
  );

  if (response.status !== 201) {
    //alert("Failed to register");
    registerMessage.innerHTML = "<p>Failed to register</p>";
    return;
  } else {
    registerMessage.innerHTML = "<p> User registered </p>";
  }

  const result = await response.json();
});
