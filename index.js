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

    // creating a li inside the todoDiv
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // creating completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"';
    completedButton.classList.add('complete-btn');
    todoDiv.append(completedButton);

      // creating delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fa-solid fa-check"';
      deleteButton.classList.add('delete-btn');
      todoDiv.append(deleteButton);

   

// Inserting all the above dynamically created html elements inside the todo-list that we created in html file
todoList.appendChild(todoDiv);

   
    
};

// eventlisteners

todoButton.addEventListener('click',addTodo);