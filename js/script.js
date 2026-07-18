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

/*
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

*/

var flyers = document.querySelectorAll(".flyerinfo img");

flyers.forEach(function (img) {
  img.onclick = function () {
    var wasRevealed = img.classList.contains("reveal");

    // Close any currently revealed flyer
    flyers.forEach(function (other) {
      other.classList.remove("reveal");
      other.closest(".flyerinfo").querySelector(".text").classList.remove("show");
    });

    // If the clicked one wasn't already open, open it
    if (!wasRevealed) {
      img.classList.add("reveal");
      img.closest(".flyerinfo").querySelector(".text").classList.add("show");
    }
  };
});
