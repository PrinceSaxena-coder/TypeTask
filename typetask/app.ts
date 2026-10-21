import { Task, TaskStatus, addTask, filterByStatus } from "./model.ts"; 

let tasks: Task[] = [];
let filter: "all" | TaskStatus = "all";

// Grab elements — cast so tsc knows exactly what they are.
const titleInput = document.getElementById("title") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;

addBtn.onclick = () => {
  const title = titleInput.value.trim();   // .value is known & typed
  if (!title) return;
  tasks = addTask(tasks, title);           // returns a fresh Task[]
};
// import { Task, TaskStatus, addTask, filterByStatus } from "./model.ts";

// let tasks: Task[] = [];
// let filter: "all" | TaskStatus = "all";

// const titleInput = document.getElementById("title") as HTMLInputElement;
// const addBtn = document.getElementById("add") as HTMLButtonElement;
// const listEl = document.getElementById("list") as HTMLUListElement;

// function render(): void {
//   listEl.innerHTML = "";

//   const visibleTasks =
//     filter === "all" ? tasks : filterByStatus(tasks, filter);

//   visibleTasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.textContent = task.title;
//     listEl.appendChild(li);
//   });
// }

// addBtn.onclick = () => {
//   const title = titleInput.value.trim();

//   if (!title) return;

//   tasks = addTask(tasks, title);
//   render();
//   titleInput.value = "";
// };