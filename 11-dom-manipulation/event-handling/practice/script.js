const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const list = document.querySelector(".list");
  const p = document.createElement("p");
  p.innerText = e.target.fname.value;
  list.appendChild(p);
});
