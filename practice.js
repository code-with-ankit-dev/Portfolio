let btn=document.querySelector(".changebtn");
    let heading=document.querySelector("#title");
     btn=addEventListener("click",function(){
    if(heading.textContent==="Ankit"){
     heading.textContent="MERN STACK DEVELOPMENT";
     heading.style.color="#00ff88";
     }else{
        heading.textContent="Ankit";
        heading.style.color="white";
     }
     });
     function changeTitle(){
        heading.textContent="MERN STACK DEVELOPER";
     }

   let greet=(name)=>"hello"+myname;
   let result=greet("Ankit");
   console.log(result);

   let number=[30,60,40,80];
   for(let i=0;i<number.length; i++)
      if(number[i]>50){
         console.log(number[i]+"-big");
      }else{
         console.log(number[i]+"-Small");
      };
   let fruit ="mango";
      switch(fruit){
         case "apple":
            console.log("red");
         break;
         case "mango":
            console.log("yellow");
         break;
         case "banana":
            console.log("green");
         break;
         default:
            console.log("Unknown");
      }
   let company=[
      {myname:"Ankit",skill:"Js"},
      {myname:"Rahul",skill:"react"},
      {myname:"suresh",skill:"css"},
   ];
   leti=0
   for(i=0;i<3;i++)
      console.log(user[i].myname + "-" + user[i].skill);

   let greeting ="good morning";
   greeting = greeting.toUpperCase();
   console.log(greeting);
   console.log(greeting.includes("MORNING"));

   
   let prices=[100,200,300];
   let taxed = prices.map(function(price){
      return price+50;
      });
   console.log(taxed);

 let ages = [19,15,22,17,30];
 let adults = ages.find(function(age){
   return age > 18;
 });
   console.log(adults);
   

   let states=[
      {name:"HARYANA",level:"GOOD"},
      {name:"GOA",level:"BETTER"},
      {name:"SIKKIM",level:"BEST"},
      {name:"KERALA",level:"GOOD"}
   ];
  for(let state of states){
   let p=document.createElement("p");
   p.textContent = state.name+ "-" + state.level;
   document.body.appendChild(p)
  };
  let skill="javascript"
  let city ="chandigarh"
   console.log(`i live in ${city} i know ${skill}`);

  
   let color=["Red","blue","green"];
      let[first,second,third] =color;
      console.log(first);
      console.log(second);

  localStorage.setItem("city","Delhi");
  console.log(localStorage.getItem("city"));  

  let myuser = {name:"Ankit",age:20};
  localStorage.setItem("myuser",JSON.stringify(myuser));

  let saved = JSON.parse(localStorage.getItem("myuser"));
  console.log(saved.name);
   console.log(saved.age);
      
   console.log("fetch starting...");
fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(Response => Response.json())
      .then(data =>{
         console.log(data.name)
         console.log(data.email)
      });
fetch("https://jsonplaceholder.typicode.com/user/999")
      .then (response =>{
         console.log(response.status);
         return response.json();
       })
      .than(data =>{
         console.log(data.name);
      });
fetch("https://jsonplaceholder.typicode.com/users/999")
      .then(response=>{
         console.log(response.status);
         if(!response.ok)  {
            throw new Error("user not found!");
         }
            return response.json();
      })
      .then(data=>{
         console.log(data.name);
      })
      .catch(error=>{
         console.log(error.message);
      });
fetch("https://jsonplaceholder.typicode.com/users/999")
      .then(response=> {
         console.log(response.status);
      if(!response.ok)  {
         throw new Error("user not found!")
      }
         return response.json();
      })
      .then(data=>{
         console.log(data.name);
      })
      .catch(error=>
         console.log(error.message)
      );
   async function getuser() {
      try{
         let response=await fetch("https://jsonplaceholder.typecode.com/user/1");

         if(!response.ok){
            throw new Error("user not found");
      }
      let data= await response.json();
      console.log(data.name);
   }catch(error){
      console.log(error.message);
   }
}
    getuser()
   async function createuser(){
      try{
      let response = await fetch("https://jsonplaceholder.typicode.com/users",{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
         name:"ankit",
         email:"ankit@example.com",
         age:20
         })
       });
       if(!response.ok){
         throw new Error("failed to create user!");
       }
       let data=await response.json();
       console.log("user created successfully!");
       console.log(data);

      }catch (error){
         console.log(error.message);
      }
   }
   createuser();
   async function updateUser(){
      try{
         let response= await fetch("https://jsonplaceholder.typicode.com/users/5",{
         method:"PUT",
         headers:{"Content-Type":"application//json"},
         body:JSON.stringify({
            name:"Ankit Updated",
            email:"newemail@example.com"
         })
      });
      if(!response.ok){
         throw new Error("failed to update user");
      }
      let data = await response.json();
      console.log("User upadated successfully");
      console.log(data);

   }catch(error){
      console.timeLog(error.message); 
   }
   }
   async function patchUser(){
      try{
      let response=await fetch("https://jsonplaceholder.typicode.com/users/5",{
            method:"PATCH",
           headers:{"content-type":"application/json"},
           body:JSON.stringify({
            email:"newemail@example.com"
           })
         });
      if(!response.ok){
         throw new error("Failed to update");
      }
      let data=await response.json();
      console.log(data);
      
   }catch(error){
    console.log(error.message);
   }
}
patchUser();
   async function deleteUser(){
      try{
         let response=await fetch("https://jsonplaceholder.typicode.com/users/5",{
            method:"DELETE"
         });
         if(!response.ok){
            throw new Error("failed to delete user");
         }

         console.log("user delete successfully");
      
   }catch(error){
      console.log(error.message);
   }
}
   deleteUser();

let loadbtn=document.querySelector("#loadbtn");
let display=document.querySelector("#userDisplay");

   loadbtn.addEventListener("click",async function(){
      console.log("button clicked!");
      try{
         let response= await fetch("https://jsonplaceholder.typicode.com/users");
         let data=await response.json();
         console.log("data received:",data);
         display.innerHTML=data[0].name;
         console.log("display updated");
      }catch(error){
         console.log(error.message);
      }
      });  
   const sayhello=(name)=>"hello";
   const geet=(name)=>"hi"+name;
   const add=(a,b)=>"a+b";
   const double=(num)=>num*2;
   const myname=()=>"Ankit";

   console.log(sayhello());
   console.log(greet("Ankit"));
   console.log(add(5,3));
   console.log(double(7));
   console.log(myname());