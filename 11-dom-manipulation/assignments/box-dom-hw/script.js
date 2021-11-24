//using a loop create 10 colored boxes
// The colors should be random
//have a background color
//
body = document.body;
container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

for (let i = 1; i <= 10; i++) {
  let div = document.createElement("div");
  let hex = "";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  div.className = "div-size";
  div.innerText = `#${hex}`;
  div.style.backgroundColor = `#${hex}`;
  container.appendChild(div);
}
