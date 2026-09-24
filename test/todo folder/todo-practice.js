let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let tasks =[];
// ===== LOAD:runs once when page open ====
let savedTasks=localStorage.getItem("tasks");
if(savedTasks){
   tasks=JSON.parse(savedTasks);
   for(let i=0; i<tasks.length;i++){
      let newTask=document.createElement("li");
      newTask.textContent=tasks[i];
      todoList.appendChild(newTask);
   }
}

addBtn.addEventListener("click",function(event){
   let userTask= todoInput.value;
   tasks.push(userTask);
localStorage.setItem("tasks",JSON.stringify(tasks));
   let newTask = document.createElement("li");
   newTask.textContent=userTask;
   let deletebtn=document.createElement("button");
   deletebtn.textContent="Delete";
   newTask.appendChild(deletebtn);
   todoList.appendChild(newTask);
   todoInput.value="";
});
todoList.addEventListener("click",function(e){
   if(e.target.tagName==="BUTTON"){
      let li=e.target.parentElement;
      let taskText=li.firstChild.textContent;

      tasks=tasks.filter(function(task){
         return task!==taskText;
      });
      localStorage.setItem("tasks",JSON.stringify(tasks));
      li.remove();
   }
});