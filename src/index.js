document.addEventListener("DOMContentLoaded", () => {
  // 1. Get references to important DOM elements
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // 2. Create a function to add a new task
  function addTask(taskDescription) {
    // Create a new list item
    const taskItem = document.createElement("li");

    // Set the task item's text content to the task description
    taskItem.textContent = taskDescription;

    // Append the task item to the task list
    taskList.appendChild(taskItem);
  }

  // 3. Add an event listener to the task form for form submission
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the task description from the input field
    const taskDescriptionInput = document.getElementById("new-task-description");
    const taskDescription = taskDescriptionInput.value.trim();

    if (taskDescription !== "") {
      // Add the task to the list
      addTask(taskDescription);

      // Clear the input field
      taskDescriptionInput.value = "";
    }
  });
});
