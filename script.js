const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");

dropdown.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburger.style.display = "none";
    cross.style.display = "block";
  } else {
    hamburger.style.display = "block";
    cross.style.display = "none";
  }
});
