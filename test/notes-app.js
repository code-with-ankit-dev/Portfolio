
let titleInput=document.getElementById("title");
let bodyInput=document.getElementById("body");
let saveBtn=document.getElementById("saveBtn");
let notesList=document.getElementById("notesList");

saveBtn.addEventListener("click",function(){
    let title=titleInput.value;
    
    let body =bodyInput.value;
    let newNote=document.createElement("p");
    newNote.textContent=title +">>" +body;
    notesList.appendChild(newNote);
    titleInput.value=""; 
    bodyInput.value=""; 
});
