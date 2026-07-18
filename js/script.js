

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
