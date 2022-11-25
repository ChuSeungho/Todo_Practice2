const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoClear = document.getElementById("clear");
const getDatas = document.getElementById("gData")

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

function postTodo(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    const ToDo = {
    "text": `${newTodo}`,
    }
    fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify(ToDo),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    })
}

toDoForm.addEventListener("submit", postTodo)