let commentInput = document.getElementById("commentInput");
let postBtn = document.getElementById("postBtn");
let commentList = document.getElementById("commentList");
let comments = [];

let savedComments=localStorage.getItem("comments");
if (savedComments){
    comments=JSON.parse(savedComments);
    for(let i=0;i<comments.length;i++){
        let oldComment=document.createElement("p");
        oldComment.textContent=comments[i];
    
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="X";
    oldComment.appendChild(deleteBtn);
    commentList.appendChild(oldComment);
    
    let commentText=comments[i];
    deleteBtn.addEventListener("click",function(){
        oldComment.remove();
        comments=comments.filter(c=>c!==commentText);
        localStorage.setItem("comments",JSON.stringify(comments));
    });
}
}
postBtn.addEventListener("click", function() {
    let userComment = commentInput.value;

    let newComment = document.createElement("p");
    newComment.textContent = userComment;
    commentList.appendChild(newComment);
    
    comments.push(userComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    
    commentInput.value= "";
});