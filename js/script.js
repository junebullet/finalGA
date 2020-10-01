var flyerPopUp = document.querySelectorAll(".flyerinfo");
var flyerText = document.querySelectorAll(".flyerinfo div");

var i;

for (i = 0; i < flyerPopUp.length; i++) {
  flyerText[i].onclick = function () {
    this.classList.toggle("show");
  };
}
