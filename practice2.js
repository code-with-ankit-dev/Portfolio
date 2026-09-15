// let age =20;
//     age= 21;
// console.log(age);

const myname="Ankit";
console.log(myname);

var city ="haryana";
    city = "banglore";
console.log(city);

// const x = 10;
// x = 20;
// console.log(x);

const cart=[];
cart.push("shoes");
cart.push("shirt");
console.log(cart);

const items= [];
items.push("laptop");
items.push("mouse");
console.log(items);

let studentname = "ankit"
let age = 20;
let isstudent = true;
let salary;
let futurejob = null;

console.log(typeof studentname);
console.log(typeof age);
console.log(typeof isstudent);
console.log(typeof salary);
console.log(typeof futurejob);

// -------STRING PRACTICE------
let firstname = "Ankit";
let lastname ='kumar';
let fullname = `${firstname} ${lastname}`;

console.log(firstname);
console.log(fullname);
console.log(fullname.length);
console.log("hello"+""+"world");

// Boolean practice
let isStudent = true;
let hasjob = false;

console.log(isStudent)
console.log(hasjob);
console.log(typeof isstudent);

console.log(10>5);
console.log(10<5);
console.log(10===10);
console.log(10==="10");

console.log(true&&true);
console.log(true&& false);
console.log(true||false);
console.log(!true);
 
// -----NULL PTACTICE----
let emptyField = null;
let notFilledYet;

console.log(emptyField);
console.log(notFilledYet);
console.log(typeof emptyField);
console.log(typeof notFilledYet);

console.log(emptyField===null);
console.log(notFilledYet===null);
console.log(emptyField===undefined);

console.log(null==undefined);
console.log(null===undefined);

// -----SYMBOL PRACTICE-----
let id1 = Symbol("user");
let id2 = Symbol("user");
console.log(id1);
console.log(typeof id1);
console.log(id1===id2);
// -----OBJECT PRACTICE-----
let student1 ={
    myname:"Ankit",
    age:20,
    course:"BCA",
    isEnrolled:true
};
console.log(student1);
console.log(student1.myname);
console.log(student1.age);
console.log(student1.course);
console.log(student1.isEnrolled);
console.log(typeof student1);

let student2= {
    myname:"ankit",
    age:20
};
// -----Adding new property using dot notation-----
student2.email="[email protected]";
student2.phone="9996784271";
console.log(student2);

//------OBJECT PART2 -- ADD/MODIFY/DELETE-----
// let user={
    // myname:"ankit",
//     age:20
// };
// console.log(user);

// user.city="Haryana";
// user.isActive =true;
// console.log(user);
// user.age=21;
// console.log(user);
// delete user.isActive;
// console.log(user);

// -----NESTED OBJECT PRACTICE----
let profile ={
    myname:"Ankit",
    age:20,
    address:{
        city:"Haryana",
        village:"myvillage",
        pincode:123456
    },
    education:{
        degree:"BCA",
        university:"Amity Online",
        year:2
    }
    };
console.log(profile);
console.log(profile.myname);
console.log(profile.address);
console.log(profile.address.city);
console.log(profile.education.degree);
console.log(typeof profile.address);
//----TYPE CONVERSION PRACTICE-----
//IMPLICIT(JAVASCIPT AUTO)
console.log("5"+3);
console.log("5"-3);
console.log("10"*"2");
console.log(true+1);
console.log("abc"+5);

//EXPLICIT(WE CONTROL)
console.log(Number("25"));
console.log(Number("abc"));
console.log(String(100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hi"));
// -----OPERATORS PRACTICE-----
// FLIPKART CART 
// item prices and quantities
let phonecase = 499;
let phonecaseQty = 2;

let headphone = 1299;
let headphoneQty = 1;

let usbCable = 199;
let usbCableQty = 3;

// STOP1 : Calculate subtotal (price*quantity for each item,then sum)
let subtotal=phonecase*phonecaseQty+headphone*headphoneQty+usbCable*usbCableQty;
console.log("subtotal:",subtotal);

//STEP 2 : Apply save 10discount (10% off subtotal)
let discount = subtotal*0.10
let afterDiscount=subtotal-discount;
console.log("after discount:",afterDiscount);

// STEP3 : ADD GST(18%Tax on discount amount)
let tax = afterDiscount*0.18;
let totalWithTax = afterDiscount+tax;
console.log("After GST:",totalWithTax);

// STEP4:CHECK DELIVERY -- FREE if totalWithTax>=2000,else 40
let deliveryCharge = 0;
if(totalWithTax>=2000){
    deliveryCharge=0;
}else{
    deliveryCharge=40;
}
console.log("Delivery:",deliveryCharge);
// STEP5:FINAL AMOUNT CUSTOMER PAYS
let finalamount=totalWithTax+ deliveryCharge;
console.log("FINAL amount:RP"+finalamount);
// ----OPERATORS PRACTICE----
console.log(15+4);
console.log(15-4);
console.log(15*4);
console.log(15%4);
console.log(2**5);

let num = 10;
num +=5;
console.log(num);
console.log(10==="10");
console.log(10!=="10");
console.log(10>=10);
console.log(true&&false);
console.log(true||false);

// -----IF/ELSE PRACTICE----
let ankitage =20;
if(ankitage>=18){
    console.log("Ankit can vote");    
}else{
    console.log("Ankit too young");
}

// Multiple Conditions
let marks=75;
if(marks>=90){
    console.log("Grade A");
}else if(marks>=75){
    console.log("Grade B");
}else if(marks>60){
    console.log("Grade C");
}else{
    console.log("Fail");
}
// Login check 
let username ="ankit";
let password ="1234";

if(username=="ankit"&&password ==="1234"){
    console.log("Login oK");
}else{
    console.log("login failed");
}
// ----LOOP PRACTICE-----
// EX:1-PRINT 1 TO 5
for(let i=1;i<=5;i++){
    console.log(i);
}
//EX-2:PRINT 10 TO 1 (reverse!)
   for(let i=10;i>=1;i--){
    console.log(i);
   }
// EXAMPLE 3:PRINT EVEN NUMBER 2 TO 10
 for (let i=2;i<=10;i+=2){
    console.log(i);
 }
   //------ WHILE LOOP PRACTICE-----
// EX-1
let i=1
while(i<=5){
    console.log(i);
    i++;
}
//EXAMPLE 2:Countdown 5 to 1
let count=5
while(count>=1){
    console.log(count);
    count--;
}
// ----FUNCTION PART D - PRACTICE
// Task 1: My addNumbers function
function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(5,10);
addNumbers(100,200);

function greetuser(name){
    console.log("welcome to my app " + name)
}
greetuser("Ankit");
greetuser("Mantika");
greetuser("Rahul");

function CalculateArea(length,width){
    console.log(length*width);
}
CalculateArea(5,0);
CalculateArea(12,8);
CalculateArea(20,15);

function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(7,3);
addNumbers(50,50);

function greetuser1(name){
    console.log("Hello", name,"!");
}
greetuser1("Ankit");
greetuser1("Papa");

function CalculateArea1(length,width){
    console.log(length*width);
}
CalculateArea(6,4);
CalculateArea(10,10);

function itemTotal(price,qty){
    return price*qty;
}
let item1=itemTotal(100,2);
console.log(item1);
let item2=itemTotal(50,3)
console.log(item2);
let subtotal1=item1+item2;
console.log(subtotal1);

function ApplyDiscount(amount,percent){
    return amount-(amount*percent/100)
}
let discounted=ApplyDiscount(subtotal1,20);
console.log(discounted);

function addgst(amount){
    return amount+(amount*18/100);
}
let withgst = addgst(280);
console.log(withgst);
function deliveryCharge2(amount){
    if(amount>500){
        return 0;
} else{
    return 40;
}
}
let delivery= deliveryCharge2(330.4);
console.log(delivery);
// FINAL CART CHAIN - ALL 5 FUNCTION TOGETHER 
let cartitem3 = itemTotal(100,2);
let cartitem4 = itemTotal(150,1);
let cartsubtotalValue=cartitem3+cartitem4;
let cartafterDiscount =ApplyDiscount(cartsubtotalValue,20);
let cartaftergst= addgst(cartafterDiscount);
let cartdeliveryFee = deliveryCharge2(cartaftergst);
let cartfinalbill=cartaftergst+cartdeliveryFee

console.log("Final Bill:Rupee"+cartfinalbill);
// ARRAY PRACTICE
let myAnimals=["cow","buffalo","goat","hen"];
    console.log(myAnimals[1]);
    console.log(myAnimals[myAnimals.length-1]);
    console.log(myAnimals.length);
    console.log(myAnimals);
// PART 2 
let mycart=[100,200,300]
    mycart.push(400);
    console.log(mycart);
    mycart.pop();
    console.log(mycart);
    console.log(mycart.length);
let arr=[10,20,30];
let result=arr.pop();
console.log(arr);
console.log(result);
let cart3=[100,250,500,150,300];
let subtotal2=0
for(let i=0;i<cart3.length;i++){
     subtotal2=subtotal2+cart3[i];
}
    console.log(subtotal2);
let cartitems=[
    itemTotal(100,2),
    itemTotal(150,1),
    itemTotal(200,3),
];
let subtotal4=0

for(let i=0;i<cartitems.length;i++){
subtotal4=subtotal4+cartitems[i];
}
let discountedAmount=ApplyDiscount(subtotal4,20);
let gstAmount = addgst(discountedAmount);
let deliveryfee=deliveryCharge2(gstAmount);
let finalBill=gstAmount+deliveryfee;
console.log("Final Bill:rupee"+finalBill);

let candidatename="Priya sharma";
let firstname1=candidatename.split(" ")[0];
console.log(firstname1);

let text="MERN is powerful"
let cleantxt=text.toUpperCase().includes("POWERFUL");
console.log(cleantxt);
let pass="abc";
if(pass.length<6){
    console.log("week")
}else{
    console.log("ohk")
};
let ankit="hello";
console.log(ankit);
// TRY/CATCH PRACTICE
function checkPassword(pass){
    if(pass===""){
        throw new Error("Password required");
    }
    if(pass.length<6){
        throw new Error("Password too short");
    }
    return"ok";
}
try{
    let result=checkPassword("abc");
    console.log(result);
}catch(error){
    console.log("Error:"+error.message);
}
try{
    let result1=checkPassword("");
    console.log(result1);
}catch(error){
    console.log("Error:"+error.message);
}
try{
    let result2=checkPassword("abc");
    console.log(result2);
}catch(error){
    console.log("Error:"+error.message);
}
try{
    let result3=checkPassword("ankit123");
    console.log(result3);
}catch(error){
    console.log("Error:"+error.message);
};
