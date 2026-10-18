let titleInput = document.getElementById("title");
let bodyInput = document.getElementById("body");
let saveBtn = document.getElementById("saveBtn");
let notesList = document.getElementById("notesList");
let notes = [];

// ========== ZONE 2: LOAD (old notes) ==========
let saved = localStorage.getItem("notes");
if(saved){
    notes = JSON.parse(saved);
    for(let i=0; i<notes.length; i++){
        let p = document.createElement("p");
        p.textContent = notes[i];
        notesList.appendChild(p);

        let currentIndex = i;

        // Edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function(e){
            let clickBtn = e.target;
            let parentP = clickBtn.parentElement;
            let oldText = notes[currentIndex];
            let newText = prompt("Edit note:", oldText);
            if(!newText) return;
            parentP.textContent = newText;
            notes[currentIndex] = newText;
            localStorage.setItem("notes", JSON.stringify(notes));
            parentP.appendChild(clickBtn);
        });
        p.appendChild(editBtn);

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", function(e){
            let clickBtn = e.target;
            let parentP = clickBtn.parentElement;
            parentP.remove();
            notes.splice(currentIndex, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
        });
        p.appendChild(deleteBtn);
    }
}

// ========== ZONE 3: SAVE (new notes) ==========
saveBtn.addEventListener("click", function(){
    let title = titleInput.value;
    let body = bodyInput.value;

    let newNote = document.createElement("p");
    newNote.textContent = title + ">>" + body;
    notesList.appendChild(newNote);
    notes.push(title + ">>" + body);
    localStorage.setItem("notes", JSON.stringify(notes));

    let currentIndex = notes.length - 1;

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function(e){
        let clickBtn = e.target;
        let parentP = clickBtn.parentElement;
        let oldText = notes[currentIndex];
        let newText = prompt("Edit note:", oldText);
        if(!newText) return;
        parentP.textContent = newText;
        notes[currentIndex] = newText;
        localStorage.setItem("notes", JSON.stringify(notes));
        parentP.appendChild(clickBtn);
    });
    newNote.appendChild(editBtn);

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function(e){
        let clickBtn = e.target;
        let parentP = clickBtn.parentElement;
        parentP.remove();
        notes.splice(currentIndex, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
    });
    newNote.appendChild(deleteBtn);

    titleInput.value = "";
    bodyInput.value = "";
});