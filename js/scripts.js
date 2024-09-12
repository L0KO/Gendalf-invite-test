burger.onclick = function dropList() {
  var list = document.getElementById("drop-list");
  var burger = document.getElementById("burger");

  if (list.className === "header__burger-drop-list") {
    list.className += " open";
    burger.className += " open";
  } else {
    list.className = "header__burger-drop-list"
    burger.className = "header__burger"
  }
}

const carusel = document.querySelector(".live-feed__scroll-container");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const cardWidth = carusel.querySelector(".live-feed__card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

const buttonScroll = (e) => {
  carusel.scrollLeft += e.target.id === "leftArrow" ? -cardWidth : cardWidth;
}

const dragStart = (e) => {
  isDragging = true;
  carusel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carusel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return;
  carusel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carusel.classList.remove("dragging")
}

carusel.addEventListener("mousedown", dragStart)
carusel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)

leftArrow.addEventListener("click", buttonScroll)
rightArrow.addEventListener("click", buttonScroll)