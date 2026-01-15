// 1 Hello World//
console.log("node js backend started");  //IN THIS WE ARE SHOWING THE OUTPUT OR SHOWING THAT WHAT CONSOLE LOG DO BASICALLY IT IS USED TO 
                                            //PRINT THE OUTPUT OR GIVES THE OUTPUT

// 2 Variables//
let name = "Anan";                       //String //HERE WE ARE INTAILISIG AND ASSIGNING A STRING VALUE USING LET 
let age = 22;                           //number    //HERE WE ARE INTAILISIG AND ASSIGNING A INETGER VALUE USING LET 
const country = "India";               //constant   //HERE WE ARE INTAILISIG AND ASSIGNING A STRING VALUE USING CONST 
                                     // VALUE ASSIGN USING CONST  CANNOT BE CHANGED 
let isstudent = true;                 //boolean//   

console.log(name);
console.log(age);
console.log(country);
console.log(isstudent);

// Data Types Example 
let score;
let data = null;

console.log(score);
console.log(data);


//object
let user ={
    name: "Rahul",
    age:25,
    email:"rahul@gmail.com"
};
console.log(user);
console.log(user.name);

//ARRAY
let numbers = [18,29,30,40];
let users =["Aman","Ravi","Tiba"];
console.log(numbers);
console.log(users[1]);

//6 operators
let a = 19;
let b = 5;
console.log("ADD",a+b);
console.log("SUBSTRACT",a-b);
console.log("Mul:", a * b);
console.log("Div:", a / b);

// Condition (if-else)
let loginAge = 18;

if (loginAge >= 18) {
    console.log("Allowed to login");
} else {
    console.log("Not allowed");
}

//loop(for)
for (let i = 1; i <= 5; i++) {
    console.log("Loop count:", i);
}

// Function
function add(x, y) {
    return x + y;
}

let result = add(20, 30);
console.log("Function result:", result);

// Simple Backend Login
const admin = {
    username: "admin",
    password: "1234"
};

function login(user, pass) {
    if (user === admin.username && pass === admin.password) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
}

login("admin", "1234");
