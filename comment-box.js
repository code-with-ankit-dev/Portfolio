let commentInput = document.getElementById("commentInput");
let postBtn = document.getElementById("postBtn");
let commentList = document.getElementById("commentList");
let comments = [];

// ===== LOAD SECTION (runs once on page open) =====
let savedComments = localStorage.getItem("comments");
if (savedComments) {
    comments = JSON.parse(savedComments);
    for (let i = 0; i < comments.length; i++) {
        let oldComment = document.createElement("p");
        oldComment.textContent = comments[i];

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        oldComment.appendChild(deleteBtn);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        oldComment.appendChild(editBtn);

        commentList.appendChild(oldComment);

        let commentText = comments[i];

        deleteBtn.addEventListener("click", function () {
            oldComment.remove();
            comments = comments.filter(c => c !== commentText);
            localStorage.setItem("comments", JSON.stringify(comments));
        });

        editBtn.addEventListener("click", function () {
            let newText = prompt("Edit your comment:");
            if (newText) {
                oldComment.textContent = newText;
                oldComment.appendChild(deleteBtn);
                oldComment.appendChild(editBtn);
                let idx = comments.indexOf(commentText);
                comments[idx] = newText;
                commentText = newText;
                localStorage.setItem("comments", JSON.stringify(comments));
            }
        });
    }
}

// ===== POST SECTION (runs when Post is clicked) =====
postBtn.addEventListener("click", function () {
    let userComment = commentInput.value;
    if (!userComment) return;

    let newComment = document.createElement("p");
    newComment.textContent = userComment;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    newComment.appendChild(deleteBtn);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    newComment.appendChild(editBtn);

    commentList.appendChild(newComment);

    comments.push(userComment);
    localStorage.setItem("comments", JSON.stringify(comments));

    let currentText = userComment;

    deleteBtn.addEventListener("click", function () {
        newComment.remove();
        comments = comments.filter(c => c !== currentText);
        localStorage.setItem("comments", JSON.stringify(comments));
    });

    editBtn.addEventListener("click", function () {
        let newText = prompt("Edit your comment:");
        if (newText) {
            newComment.textContent = newText;
            newComment.appendChild(deleteBtn);
            newComment.appendChild(editBtn);
            let idx = comments.indexOf(currentText);
            comments[idx] = newText;
            currentText = newText;
            localStorage.setItem("comments", JSON.stringify(comments));
        }
    });

    commentInput.value = "";
});