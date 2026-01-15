document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTask = document.getElementById("addtask-btn");
  const todoList = document.getElementById("todolist");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTasks(task));
  addTask.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;
    const newTask = {
      id: Date.now(),
      task: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTaks();
    todoInput.value = ""; //clear
    console.log(tasks);
  });
  function renderTasks(task) {
    console.log(task);
  }

  function saveTaks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
