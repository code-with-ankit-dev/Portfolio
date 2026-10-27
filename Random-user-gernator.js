let Img = document.getElementById("userImg");
let Name=document.getElementById("userName");
let Email=document.getElementById("userEmail")
let Country=document.getElementById("userCountry");
let Age=document.getElementById("userAge");
let Phoneno=document.getElementById("userPhoneno");
let Btn =document.getElementById("getRandomuser");
// Function
async function getRandomuser(){
try{
    let response=await fetch("https://randomuser.me/api/");
    let data= await response.json();
    Img.src=data.results[0].picture.large
    Name.textContent=data.results[0].name.first+" "+data.results[0].name.last
    Email.textContent = data.results[0].email
    Country.textContent=data.results[0].location.country
    Age.textContent=data.results[0].dob.age
    Phoneno.textContent=data.results[0].phone

}catch(error){
Name.textContent="user not found"
}
}
Btn.addEventListener("click",getRandomuser);