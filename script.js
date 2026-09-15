document.addEventListener("DOMContentLoaded",function(){
    let btn=document.querySelector(".changebtn");
    let title=document.querySelector("#title");
    let counter = document.querySelector("#counter");
    let reset = document.querySelector("#reset");
    let count = 0;

    btn.addEventListener("click",function(){
    let heading = document.querySelector("h1");
    count= count+1; 
    counter.textContent="click:" + count;
            if(heading.textContent==="Ankit"){
            heading.textContent="Future MERN Developer";
            }else{
                heading.textContent="Ankit";
                heading.style.color="White";
            }
            });
        
    reset.addEventListener("click",function(){
        count=0;
        counter.textContent="click:0";
    });
    let submitBtn=document.querySelector("#submitBtn");
     submitBtn=addEventListener("click",function(){
        let input=document.querySelector("#userinput");
        let output=document.querySelector("#output");
        output.textContent="hello"+ "-" +input.value
    });
});
