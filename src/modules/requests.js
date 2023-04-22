const BASR_URL = 'https://todo-app-c886f-default-rtdb.firebaseio.com/';

const postTask = async (dataObject) => {
  let response = await fetch(
    `${BASR_URL}tasks/.json`,
    {
      method: 'POST',
      body: JSON.stringify(dataObject)
    }
  )
  let data = await response.json();
  return data;
};

const getTasks = async () => {
  let response = await fetch(`${BASR_URL}tasks/.json`);
  let data = await response.json();
  return data;
}

const deleteTaskById = async (id) => {
  let response = await fetch(`${BASR_URL}tasks/${id}/.json`, { method: 'DELETE' });
};

const markTask = async (id, dataObject) => {
  let response = await fetch(
    `${BASR_URL}tasks/${id}/.json`,
    {
      method: 'PUT',
      body: JSON.stringify(dataObject)
    }
  )
  let data = await response.json();
  return data;
};

export { postTask, getTasks, deleteTaskById, markTask };