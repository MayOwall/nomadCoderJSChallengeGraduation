const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];


function toDosSaver() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

function todoListDeleter(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  toDosSaver();
  li.remove();
};

function todoPainter(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const button = document.createElement("button");
  button.innerText = "⭕️";
  button.addEventListener("click", todoListDeleter);

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  li.appendChild(button);
  li.appendChild(span);

  todoList.appendChild(li);
};

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  toDosSaver();
  todoInput.value = "";
  todoPainter(newTodoObj);
};

todoForm.addEventListener("submit", todoSubmitHandler);


const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => todoPainter(item));
} else {

};