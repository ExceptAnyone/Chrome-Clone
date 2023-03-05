const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username" ;

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    console.log('test')
    }


function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

