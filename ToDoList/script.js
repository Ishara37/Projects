 const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 🟢 Load saved tasks when page loads
window.addEventListener('load', loadTasks);

addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = '';
});

function createTaskElement(text, completed = false) {
  const li = document.createElement('li');
  li.textContent = text;

  if (completed) {
    li.classList.add('completed');
  }

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks(); // Save change
  });

  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
    saveTasks(); // Save change
  });

  return li;
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.textContent,
      completed: li.classList.contains('completed')
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(task => {
      const li = createTaskElement(task.text, task.completed);
      taskList.appendChild(li);
    });
  }
}










// addBtn.addEventListener('click',function(){
//     const taskText=taskInput.value.trim();
//     if(taskText==='')return;

//     const li=document.createElement('li');
//     li.textContent=taskText;

//     //Toggle complete
//     li.addEventListener('click',()=>{
//         li.classList.toggle('completed');
//     });
//     //Right-click to delete
//     li.addEventListener('contextmenue',(e)=>{
//         e.preventDefault();
//         li.remove();

//     });
//     taskList.appendChild(li);
//     taskInput.value='';

// })