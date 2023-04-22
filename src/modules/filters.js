

const filterBy = (renderHandler) => {
  const btnActive = document.querySelectorAll('.btn-filter');
  btnActive.forEach(btn => {
    btn.addEventListener('click', async (e) => {

      if (e.currentTarget.id === 'active') {
        await renderHandler();
        const noActives = document.querySelectorAll('.completed-task');
        noActives.forEach(task => task.remove());
      } else if (e.currentTarget.id === 'all') {
        renderHandler();
      } else {
        await renderHandler();
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => {
          if (!task.classList.contains('completed-task')) task.remove();
        });
      }

    });
  });
}

export { filterBy }