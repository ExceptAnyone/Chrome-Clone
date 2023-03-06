const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input"); 

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput
    todoInput.value="";
}

todoForm.addEventListener("submit",handleToDoSubmit);