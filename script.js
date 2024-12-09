const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 300) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    links.classList.remove("active");
  })
);
