import { createLiTask } from "./modules/createLiTask.js";
import { filterBy } from "./modules/filters.js";
import { postTask, getTasks, deleteTaskById } from "./modules/requests.js";
import switchTheme from "./modules/switchTheme.js";
switchTheme();

const ulDom = document.querySelector('ul');
const form = document.querySelector('form');
const newTaskInput = document.querySelector('#task-input');
const btnNewTask = document.querySelector('#btn-create-task');
let data = {};

const createDataTask = () => {
  newTaskInput.addEventListener('keyup', (e) => {
    data[e.target.name] = e.target.value;
    data["isActive"] = true;
  })
  return data;
}
createDataTask();

const validateData = (data) => {
  return !(!data.title);
}

btnNewTask.addEventListener('click', async () => {
  if (validateData(data)) {
    await postTask(data);
    document.querySelectorAll('ul li').forEach(li => li.remove());
    renderTasks();
    form.reset();
    data = {};
  } else {
    alert('The task must have a title');
  }
});


const renderTasks = async () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => task.remove());
  let tasksList = await getTasks();
  for (const key in tasksList) {
    let { title, isActive } = tasksList[key];
    ulDom.appendChild(createLiTask(
      title,
      isActive,
      key,
      deleteTaskById,
      renderTasks));
  }
}

renderTasks();
filterBy(renderTasks);