const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    
}

function handleLinkClick(event) {
    console.log(event)
    alert("Clicked!")
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function clearToDo(){
    button.appendChild(clock)
    const button = document.createElement("button");
    button.innerText = "Clear Todo"
}


loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    paintGreeting(savedUsername)
}