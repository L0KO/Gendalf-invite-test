const caruselOne = document.querySelector(".live-feed__scroll-container");
const caruselTwo = document.querySelector(".values__values-scroll-container");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const cardWidth = caruselOne.querySelector(".live-feed__card").offsetWidth;

let isDragging = false, startCaruselOne, startCaruselTwo, startScrollLeftCaruselOne, startScrollLeftCaruselTwo;

const buttonScroll = (e) => {
  caruselOne.scrollLeft += e.target.id === "leftArrow" ? -cardWidth : cardWidth;
}

const dragStartCaruselOne = (e) => {
  isDragging = true;
  caruselOne.classList.add("dragging");
  startCaruselOne = e.pageX;
  startScrollLeftCaruselOne = caruselOne.scrollLeft;
}

const draggingCaruselOne = (e) => {
  if (!isDragging) return;
  caruselOne.scrollLeft = startScrollLeftCaruselOne - (e.pageX - startCaruselOne);
}

const dragStartCaruselTwo = (e) => {
  isDragging = true;
  caruselTwo.classList.add("dragging");
  startCaruselTwo = e.pageX;
  startScrollLeftCaruselTwo = caruselTwo.scrollLeft;
}

const draggingCaruselTwo = (e) => {
  if (!isDragging) return;
  caruselTwo.scrollLeft = startScrollLeftCaruselTwo - (e.pageX - startCaruselTwo);
}

const dragStop = () => {
  isDragging = false;
  caruselOne.classList.remove("dragging")
  caruselTwo.classList.remove("dragging")
}

caruselOne.addEventListener("mousedown", dragStartCaruselOne)
caruselOne.addEventListener("mousemove", draggingCaruselOne)
caruselTwo.addEventListener("mousedown", dragStartCaruselTwo)
caruselTwo.addEventListener("mousemove", draggingCaruselTwo)
document.addEventListener("mouseup", dragStop)

leftArrow.addEventListener("click", buttonScroll)
rightArrow.addEventListener("click", buttonScroll)

burger.onclick = function dropList() {
  var list = document.getElementById("drop-list");
  var burger = document.getElementById("burger");

  if (list.className === "header__burger-drop-list") {
    list.classList.add("open");
    burger.classList.add("open");
  } else {
    list.classList.remove("open");
    burger.classList.remove("open");
  }
}