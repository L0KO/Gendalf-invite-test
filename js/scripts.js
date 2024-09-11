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