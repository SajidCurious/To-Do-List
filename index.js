// selelctors

const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

// functions

let addTodo = (event) => {
  // prevents form from auto submitting
  event.preventDefault();

  const htmlData = `
    <div class="final-todo">
    <li id="newTodo"></li>
    <div class="buttons">
    <button class="complete-btn"><i class="fa-solid fa-check"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </div>`;
  todoList.insertAdjacentHTML('afterbegin', htmlData);
  let newTodo = document.getElementById('newTodo');
  newTodo.innerText = todoInput.value;

  // clear todoInput value 
  todoInput.value = "";
};

// const deleteBtn = document.getElementById('delete-btn');
let deleteTrash = (e) => {
  // const finalTodo = document.getElementsByClassName('final-todo');
  // finalTodo.remove();
  const item = e.targer;
  //  delete todo

  // const todo = item.parentElement;
  todo.remove();

};

// eventlisteners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTrash);
