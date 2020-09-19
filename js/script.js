console.log("JS Loaded!");

const name = "Marc";

console.log(name);

const showModal = document.querySelector(".img");
const maskDiv = document.querySelector(".mask");
const closeModal = document.querySelector(".close");

showModal.addEventListener("click", function () {
  maskDiv.classList.add("active");
});
