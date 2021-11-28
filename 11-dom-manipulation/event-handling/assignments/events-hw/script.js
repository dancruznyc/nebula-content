const body = document.body;
console.log(body);
body.style.backgroundColor = "turquoise";

const title = document.createElement("h1");
title.innerText = "This is my title";
body.appendChild(title);

title.style.backgroundColor = "yellow";

title.setAttribute("style", "font-size: 90px; background-color: pink;");
let num = 0;
title.innerText = num;

const addButton = document.createElement("button");
addButton.innerText = "Add";
body.appendChild(addButton);

addButton.classList.add("btn");

const subtractButton = document.createElement("button");
subtractButton.innerText = "Subtract";
body.appendChild(subtractButton);

addButton.addEventListener("click", () => {
  num++;
  title.innerText = num;
});

subtractButton.addEventListener("click", () => {
  num--;
  title.innerText = num;
});
