const greetString = document.querySelector("#greet");
const loginForm = document.querySelector("#loginForm");
const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul");

const HIDDEN_CLASSNAME = "hidden";

todoForm.classList.add(HIDDEN_CLASSNAME);

/** 
 * login part
*/

const changeForm = function (name) {
    greetString.innerText = `welcome, ${name}.`
    loginForm.classList.add("hidden");
    todoForm.classList.remove("hidden");
}

if (localStorage.getItem("userName")) {
    const name = localStorage.getItem("userName");
    changeForm(name);
}

const handleLogin = function (event) {
    event.preventDefault();
    const input = loginForm.querySelector("input");
    const name = input.value;
    if (name.length >= 2 && name.length <=10) {
    localStorage.setItem("userName", name);
    input.value = "";
    changeForm(name);}
    else {
        input.placeholder="name must be between 2 and 10 characters in length."
        input.value = "";
    }
}

loginForm.addEventListener("submit", handleLogin);


/**
 * todo-list part
 * 
 * load todo:
 * 기존에 local storage 에저장된 todo가있다면불러온다.
 * 
 * todo input이 이루어진다면 
 * handleTodoSubmit 에 의하여
 * todoObj에 새로운 todo가 저장되고
 * 다음과 같은 함수들이 실행된다.
 * 
 * 
 * paintTodo : todo를 화면에 추가한 후, 삭제 버튼을 활성화 시킨다.
 * saveTodo : todo가 저장된 todoObj를 Json.stringify를 통해 
 * 저장가능한 형태 (string) 으로 만든 후 localStorage에 업데이트 시킨다.
 * 
 * 
 */


let todoObj = {};
const TODOS_KEY = "todos";


const saveTodo = function() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoObj));
}

const deleteButton = function(event) {
    const target = event.target.parentElement;
    const targetId = target.id;
    console.log(targetId);
    target.remove();
    delete todoObj[targetId];
    saveTodo(); 
}


const paintTodo = function(newTodo, todoKey) {
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = todoKey;
    span.innerText = newTodo;
    button.innerText = "✖";

    button.addEventListener("click", deleteButton);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}

const loadTodo = function() {
    todoObj = {};
    const todoData = localStorage.getItem(TODOS_KEY);
    const loadedObj = JSON.parse(todoData);
    if (loadedObj !== null) {
    const keyArray = Object.keys(loadedObj);
    keyArray.forEach((key) => {
        const todo = loadedObj[key];
        todoObj[key] = todo;
        paintTodo(todo, key);
    }
    )}

}





const handleToDoSubmit = function (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const todoKey = new Date().getTime().toString();
    todoObj[todoKey] = newTodo;
    
    paintTodo(newTodo, todoKey)
    saveTodo();

}


loadTodo();

todoForm.addEventListener("submit", handleToDoSubmit);