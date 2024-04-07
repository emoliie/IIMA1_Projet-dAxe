const token = localStorage.getItem("token");

if (token) {
  window.location.href = "http://127.0.0.1/PROJET%20D'AXE%20CDI/php/user.php";
}

// LOGIN

const box = document.getElementById("box");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  box.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  box.classList.remove("active");
});

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const username = document.getElementById("register-username");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const message = document.getElementById("message");

// LOGIN

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  });

  if (response.status !== 200) {
    alert("Connection failed");
    return;
  }

  const result = await response.json();

  const token = result.token;

  localStorage.setItem("token", token);

  window.location.href = "http://127.0.0.1/PROJET%20D'AXE%20CDI/php/user.php";
});

// REGISTER
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: registerEmail.value,
      name: username.value,
      password: registerPassword.value,
    }),
  });

  if (response.status !== 201) {
    alert("Failed to register");
    return;
  } else {
    message.innerHTML = "<p> User registered </p>";
  }

  const result = await response.json();
});
