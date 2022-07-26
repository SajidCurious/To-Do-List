// selelctors

const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

// functions

let addTodo = (event) =>{
    // prevents form from auto submitting
    event.preventDefault();

    // creating a div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const htmlData = `
    <li id="newtodo"></li>
    <button id="complete-btn"><i class="fa-solid fa-check"></i></button>
    <button id="delete-btn"><i class="fa-solid fa-trash-can"></i></button>`;
  todoDiv.insertAdjacentHTML('afterbegin',htmlData);
  todoList.appendChild(todoDiv);

   

// Inserting all the above dynamically created html elements inside the todo-list that we created in html file
todoList.appendChild(todoDiv);

   
    
};

// eventlisteners

todoButton.addEventListener('click',addTodo);