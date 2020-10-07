/*
var flyerPopUp = document.querySelectorAll(".flyerinfo img");
var flyerText = document.querySelectorAll(".text");

var i;

for (i = 0; i < flyerPopUp.length; i++) {
  flyerPopUp[i].onclick = function () {
    this.classList.toggle("reveal");
  };
}
*/

var flyerPopUp = document.querySelectorAll(".flyerinfo img");
var flyerText = document.querySelectorAll(".text");

var i;

for (i = 0; i < flyerPopUp.length; i++) {
  flyerPopUp[i].onclick = function (event) {
    showText(event.target, event.target.nextElementSibling);
  };
}

function showText(flyerPopUp, flyerText) {
  flyerPopUp.classList.toggle("reveal");
  if (flyerPopUp.classList.contains("reveal")) {
    flyerText.style.display = "block";
  } else {
    flyerPopUp.style.padding = "";
    flyerText.style.display = "none";
  }
}
