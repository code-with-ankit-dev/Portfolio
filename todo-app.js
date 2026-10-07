let taskInput=document.getElementById("taskInput");
let addBtn= document.getElementById("addBtn");
let taskList=document.getElementById("taskList");
let tasks=[];
localStorage.setItem("task",JSON.stringify(tasks));
let savedTasks=localStorage.getItem("tasks")
if (savedTasks){
    tasks=JSON.parse(savedTasks);

    for(let i=0;i<tasks.length;i++){
    let newTask = document.createElement("li");
    newTask.textContent=tasks[i];
    
    let deleteBtn=document.createElement("button");
        deleteBtn.textContent="x";
        newTask.appendChild(deleteBtn);

        let taskText=tasks[i];
        deleteBtn.addEventListener("click",function(){
            newTask.remove();
            tasks=tasks.filter(t=>t!==taskText);
            localStorage.setItem("tasks",JSON.stringify(tasks));
        });
    taskList.appendChild(newTask);
    };
}
addBtn.addEventListener("click",function(){
    let userTask =taskInput.value;
    let newTask =document.createElement("li");
    newTask.textContent=userTask;
    let deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
newTask.appendChild(deleteBtn);

let taskText = userTask;
deleteBtn.addEventListener("click", function() {
    newTask.remove();
    tasks = tasks.filter(t => t!== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
});
    taskList.appendChild(newTask);
    tasks.push(userTask);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    taskInput.value="";
});