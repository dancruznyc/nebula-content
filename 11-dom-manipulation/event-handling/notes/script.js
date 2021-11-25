const div = document.querySelector("div");
const body = document.body;
let isClicked = false;

div.addEventListener("click", () => {
  if (!isClicked) {
    body.style.backgroundColor = "tomato";
    isClicked = true;
  } else {
    body.style.backgroundColor = "white";
    isClicked = false;
  }
});
