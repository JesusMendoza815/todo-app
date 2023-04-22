import { markTask } from "./requests.js";

function createLiTask(taskTitle, isActive, id, deleteTask, printCards) {
  // Crear el elemento li
  const li = document.createElement('li');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const h5 = document.createElement('h5');
  const button = document.createElement('button');


  const img = document.createElement('img');

  li.classList.add('list-group-item', 'text-white-50', 'rounded-0', 'd-flex', 'justify-content-between', 'align-items-center', 'task');
  if (!isActive) {
    li.classList.add('completed-task');
    input.checked = true;
  }
  span.classList.add('d-flex', 'align-items-end'); 
  input.classList.add('form-check-input', 'm-0');
  h5.classList.add('my-0', 'mx-2', 'fs-6');
  button.classList.add('btn', 'm-0', 'p-0');


  input.type = 'checkbox';
  input.name = 'complete-task';
  input.addEventListener('change', async (e) => {
    let liTask = e.currentTarget.parentNode.parentNode;
    liTask.classList.toggle('completed-task');
    let object = {
      isActive: !liTask.classList.contains('completed-task'),
      title: taskTitle
    }
    await markTask(id, object);
  });
  img.src = './images/icon-cross.svg';
  button.id = id;
  button.addEventListener('click', async (e) => {
    await deleteTask(e.currentTarget.id);
    document.querySelectorAll('ul li').forEach(li => li.remove());
    printCards();
  })

  h5.textContent = taskTitle;

  span.appendChild(input);
  span.appendChild(h5);
  button.appendChild(img);
  li.append(span, button);

  return li;
}

export { createLiTask }