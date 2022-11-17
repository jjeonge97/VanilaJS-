const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  // 여기서 saveToDos() 함수를 꼭 호출해야 로컬 스토리지에서도 지워짐
  saveToDos();
}

// new list 에 추가하는 함수
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.textContent = newTodo.text;
  const button = document.createElement("button");
  button.textContent = "✖︎";

  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { text: newToDo, id: Date.now() };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
