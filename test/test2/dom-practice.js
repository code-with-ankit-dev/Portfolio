let taskInput =document.getElementById("taskInput");
let addBtn=document.getElementById("addBtn");
let TaskList=document.getElementById("TaskList");


let tasks =[];

let savedTasks = localStorage.getItem("tasks");
if(savedTasks){
    tasks=JSON.parse(savedTasks);
    for(let i=0;i<tasks.length;i++){
        let li=document.createElement("li");
        li.textContent=tasks[i];
        TaskList.appendChild(li);
    }
}
// ADD task
addBtn.addEventListener("click",function(){
    let userTask=taskInput.value;
    // Add to array
    tasks.push(userTask);
    //save array to localstorge
    localStorage.setItem("tasks",JSON.stringify(tasks));
    // Show on page
    let newTask=document.createElement("li");
    newTask.textContent=userTask;
    TaskList.appendChild(newTask);
    taskInput.value=""; 
});
// DELETE TASK
TaskList.addEventListener("click",function(event){
    let clickedText=event.target.textContent;
    // Remove from array
    tasks=tasks.filter(function(t){
        return t!==clickedText;
    });
    // save updated array
    localStorage.setItem("tasks",JSON.stringify(tasks));
    // Remove from page 
    event.target.remove();
});
