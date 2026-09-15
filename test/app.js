console.log("app js is running");
const btn = document.querySelector("#myBtn");
const output = document.querySelector("#output");

btn.addEventListener("click",function(){
    console.log("Button was clicked");
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
   output.textContent="user loaded! check console.";
})
.catch(function(error){
console.log("Error:",error);
});
    output.innerHTML="<p>HELLO!</p>";
});