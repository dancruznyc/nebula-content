const h1 = document.querySelector("h1");
const div = document.querySelector("div");

h1.addEventListener("click", () => {
  h1.style.backgroundColor = "red";
});

div.addEventListener("click", () => {
  div.classList.toggle("box");
});
