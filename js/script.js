/*
var flyerPopUp = document.querySelectorAll(".flyerinfo");
var flyerText = document.querySelectorAll(".flyerinfo div");

var i;

for (i = 0; i < flyerPopUp.length; i++) {
  flyerText[i].onclick = function () {
    this.classList.toggle("show");
  };
}
*/

var flyerPopUp = document.querySelectorAll(".flyerinfo img");
/*var flyerText = document.querySelectorAll(".text");*/

var i;

for (i = 0; i < flyerPopUp.length; i++) {
  flyerPopUp[i].onclick = function () {
    this.classList.toggle("reveal");
  };
}
