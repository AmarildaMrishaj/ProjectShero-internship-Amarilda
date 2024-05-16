let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".hidden-navbar");
let closeIcon = document.querySelector(".hidden-navbar img");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
    navbar.classList.remove("show");
  });

  