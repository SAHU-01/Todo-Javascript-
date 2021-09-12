//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event Listeners
todoButton.addEventListener('click',addTodo);

//Functions
function addTodo(event){
    //prevents event form from submitting
    event.preventDefault();
    //todo div 
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //create list element
    const newTodo=document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark Button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append div to list of tasks
    todoList.appendChild(todoDiv);
}