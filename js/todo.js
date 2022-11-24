const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoClear = document.getElementById("clear");

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function clearTodo(){
    if(localStorage.todos.length == 2){
        alert("아직 작성된 ToDo가 없습니다!")
        
    }else{
    localStorage.setItem(TODOS_KEY, "[]")
    location.reload()

    }}

function paintToDo(newTodo) {
    const li = document.createElement("li");
      li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

clear.addEventListener("click", clearTodo)

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
    }

