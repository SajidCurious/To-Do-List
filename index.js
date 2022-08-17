// selectors

const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

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
  updateLsData();
  });

  // completing the todo task
  completeButton.addEventListener('click', () => {
  div1.classList.toggle('completed');
  updateLsData();
  });

  // Local Storage
  const updateLsData = () => {
    const notes = document.querySelectorAll('.todoList .final-todo');
    const data = [];
    notes.forEach((newTodo) => {
      return data.push(newTodo.innerHTML);
    });
    // console.log(notes);

    localStorage.setItem("notes", JSON.stringify(data));
  };

  completeButton.addEventListener('click',updateLsData);
};

// eventlisteners
todoButton.addEventListener('click', addTodo);
