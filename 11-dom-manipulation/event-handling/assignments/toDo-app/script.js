const showFormBtn = document.querySelector(".show-todo-form--btn");
const todoInputForm = document.querySelector(".todo--form");
const formInputs = document.querySelectorAll(".todo--form input");
const todoDisplay = document.querySelector(".todo--display");
const todoHeading = document.querySelector(".todo--title");
const todoContainer = document.querySelector(".todo--container");

// Show Input Form Button
showFormBtn.addEventListener("click", () => {
  todoInputForm.classList.toggle("show");
});

// Add New ToDo functionality
todoInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.todoInput.value === "") {
    return;
  }
  const todoItem = `
  <div class="todo--item">
    <span class="item--content">${e.target.todoInput.value}</span> 
    <span class="item--controls">
      <i class="edit fas fa-pen-alt"></i>
      <i class="delete fas fa-trash-alt"></i>
    </span>
  </div>
  `;

  todoDisplay.innerHTML += todoItem;
  e.target.todoInput.value = "";
  borderRadius();
});

// Edit, Delete and Strike Through
todoDisplay.addEventListener("click", (e) => {
  const clickedItem = e.target.classList[0];
  if (clickedItem === "delete") {
    e.target.parentNode.parentNode.remove();
  }
  if (clickedItem === "edit") {
    todoInputForm.todoInput.value =
      e.target.parentNode.previousElementSibling.innerText;
    e.target.parentNode.parentNode.remove();
    if (![...todoInputForm.classList].includes("show")) {
      todoInputForm.classList.add("show");
    }
  }
  if (clickedItem === "item--content") {
    if (e.target.style.textDecoration === "") {
      e.target.style.textDecoration = "line-through";
    } else if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    }
  }
});

// Dynamically changing border radius if there are no todo items
function borderRadius() {
  if (todoDisplay.innerHTML === "") {
    todoHeading.style.borderRadius = "10px 10px 0 0";
    todoContainer.style.borderRadius = "10px 10px 0 0";
  } else if (todoDisplay.innerHTML) {
    todoHeading.style.borderRadius = "10px";
    todoContainer.style.borderRadius = "10px";
  }
}

borderRadius();
