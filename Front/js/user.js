async function getProfile() {
  const token = localStorage.getItem("token");
  const userInfo = document.getElementById("user-info");

  if (!token) {
    window.location.href =
      "http://127.0.0.1/PROJET%20D'AXE%20CDI/php/login.php";
  }

  const response = await fetch("http://127.0.0.1:3000/getMyProfile", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  // console.log(result);

  userInfo.innerHTML = createUserInfo(result.user);
}

getProfile();

function createUserInfo(user) {
  return `
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    `;
}

const signOutBtn = document.getElementById("sign-out");

signOutBtn.addEventListener("click", () => {
    localStorage.removeItem('token')

    window.location.href =
      "http://127.0.0.1/PROJET%20D'AXE%20CDI/php/login.php";
});
