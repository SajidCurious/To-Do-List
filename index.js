// selelctors

const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');
const filterOption = document.getElementById('filter-todo');

// functions

let addTodo = (event) => {
  // prevents form from auto submitting
  event.preventDefault();

  // creating first div
  const div1 = document.createElement('div');
  div1.classList.add("final-todo");

  // creating li element
  const li = document.createElement('li');
  li.classList.add("newTodo");
  li.innerHTML = todoInput.value;
  todoInput.value = "";

  // Inserting li inside the first div
  div1.appendChild(li);

  // creating a completed button
  const completeButton = document.createElement('button');
  completeButton.classList.add('complete-btn');
  completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;

  // Inserting the completeButton inside a div1
  div1.appendChild(completeButton);
  
  // creating a delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  // Inserting the deleteButton inside a div1
  div1.appendChild(deleteButton);

  // Inserting the whole dynamically created elements inside a html element
  todoList.appendChild(div1);

  // Deleting a list or defining the deleteTrash function
  deleteButton.addEventListener('click', () =>{
  div1.remove();
  });

  // completing the todo task
  completeButton.addEventListener('click', () => {
  div1.classList.toggle('completed');
  });



};

// declaring filterTodo function
const filterTodo = (e) =>{
  const todo = todoList.childNodes;
  todo.forEach(() =>{
      switch (e.target.value) {
        case "all":
          todo.style.dispay = "flex";
          break;
        case "completed":
          if(todo.classList.contains('completed')){
          todo.style.dispay = "flex";
          } else{
            todo.style.dispay = "none";
          }
          break;
        case "uncompleted":
          if(!todo.classList.contains('completed')){
            todo.style.dispay = "flex";
            } else{
              todo.style.dispay = "none";
            }
          break;
      }
  });
};


// eventlisteners
todoButton.addEventListener('click', addTodo);
filterOption.addEventListener('click',filterTodo);
