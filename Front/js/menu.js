// MENU BURGER

let button = document.querySelector("#button");

function burgerMenu(x) {
  x.classList.toggle("change");
}

//console.log(button);
button.addEventListener("click", function () {
  //console.log("click");

  let burger_menu = document.querySelector("#burger-menu");
  burger_menu.classList.toggle("open");
});

let body = document.querySelector("body");
let burgerSection = document.querySelector(".button-section");

let menu = document.getElementById("burger-menu");
body.addEventListener("click", function (event) {
  const target = event.target; // event.target = l'endroit où j'ai cliqué
  if (
    target.classList.contains("button-section") || // si c'est le menu burger rien ne se passe, c'est la ligne 10 qui s'en occupe
    target.classList.contains("bar1") ||
    target.classList.contains("bar2") ||
    target.classList.contains("bar3")
  )
    return;
  if (!menu.classList.contains("open")) return; // si c'est le menu et au'il n'est pas ouvert, rien ne se passse
  if (target !== menu) {
    // si ce que j'ai cliqué n'est pas le menu alors je ferme = j'ai cliqué en dehors
    menu.classList.remove("open");
    burgerMenu(burgerSection);
  }
});
