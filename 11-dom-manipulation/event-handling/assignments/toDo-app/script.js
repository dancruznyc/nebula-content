const showFormBtn = document.querySelector(".show-todo-form--btn");
const todoInputForm = document.querySelector(".todo--form");
const form = document.querySelector(".todo--form");

showFormBtn.addEventListener("click", () => {
  todoInputForm.classList.toggle("show");
  todoInputForm.style.maxHeight = "100%";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
});
