const showFormBtn = document.querySelector(".show-todo-form--btn");
const todoInputForm = document.querySelector(".todo--form");
const form = document.querySelector(".todo--form");
const todoDisplay = document.querySelector(".todo--display");
const todoHeading = document.querySelector(".todo--title");
const todoContainer = document.querySelector(".todo--container");

showFormBtn.addEventListener("click", () => {
  todoInputForm.classList.toggle("show");
  todoInputForm.style.maxHeight = "100%";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.todoInput.value);
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
  if (e.target.classList[0] === "delete") {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList[0] === "edit") {
    form.todoInput.value = e.target.parentNode.previousElementSibling.innerText;
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList[0] === "item--content") {
    if (e.target.style.textDecoration === "") {
      e.target.style.textDecoration = "line-through";
    } else if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    }
  }
});

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
