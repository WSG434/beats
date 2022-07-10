const openButton = document.querySelector(".hamburger");
const fullscreen = document.querySelector(".wrapper-fullscreen")
const body = document.body;


openButton.addEventListener("click", e => {
  fullscreen.style.display = "flex";
})


const overlayElement = document.querySelector(".wrapper-fullscreen");
const overlayElement2 = document.querySelector(".fullscreen-menu");


overlayElement.addEventListener("click", e => {
  console.log(e.target);
  if (e.target === overlayElement || e.target === overlayElement2) {
    closeElement.click();
    fullscreen.style.display = "none";
  }
})

const closeElement = overlayElement.querySelector(".close");

closeElement.addEventListener("click", e => {
  e.preventDefault();
  fullscreen.style.display = "none";
})


const menuList = document.querySelector(".fullscreen-menu__list");

menuList.addEventListener("click", e => {
  e.preventDefault();
  fullscreen.style.display = "none";
})



