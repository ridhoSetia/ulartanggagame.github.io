const loading = document.querySelector(".load");
window.onload = () => {
  loading.style.display = "none";
};
window.onbeforeunload = () => {
  loading.style.display = "block";
};

const hamburgerMenu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const bx = document.querySelector(".bx");

hamburgerMenu.onclick = () => {
  navbar.classList.toggle("open");
  bx.classList.toggle("bx-x");
};

window.onscroll = () => {
  navbar.classList.remove("open");
  bx.classList.remove("bx-x");
};

const buttonShowGame = document.querySelector(".buttonShowGame1");
const showGame = document.querySelector(".gameShowUlarTangga");
const buttonCloseShowGame = document.querySelector(".fa-caret-down");

buttonShowGame.onclick = () => {
  showGame.classList.add("active");
  document.querySelector("html").classList.add("hide");
};

buttonCloseShowGame.onclick = () => {
  showGame.classList.remove("active");
  document.querySelector("html").classList.remove("hide");
};
