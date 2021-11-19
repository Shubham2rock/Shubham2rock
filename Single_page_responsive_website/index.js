const toggleBtn = document.querySelector(".toggle-btn");
const navlinks = document.querySelector(".nav-links");

const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input");

toggleBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

searchBtn.addEventListener("mouseover", () => {
  input.classList.toggle("show-inp");
});
