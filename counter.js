let countDisplay=document.getElementById("count");
let clickmeBtn=document.getElementById("clickme");
        let count=0;
   clickmeBtn.addEventListener("click",function(){
        count=count+1;
        countDisplay.textContent=count;
    });