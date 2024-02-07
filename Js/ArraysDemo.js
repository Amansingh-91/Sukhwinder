// let firstName =  "Aman";

let studentNames = ["Aman","jhon",123,true,["age","Gender"],{name:"aman"},null,undefined]; 

let student = {name:"aman",gender:"Male"}

console.log(student["gender"]);
// let studentNames = [];

// to add data/ insert

// push function
studentNames.push("Aman");//0
console.log(studentNames);
studentNames.push("dharam");//1
console.log(studentNames);
studentNames.push("jack");//2
console.log(studentNames);
studentNames.push("jhon");//3
console.log(studentNames);
studentNames.push("jim");//4
console.log(studentNames);

// updation 
studentNames[0] = "Divya";
console.log(studentNames);

// deletion 
let deletedName = studentNames.pop();
console.log(deletedName);
console.log(studentNames);

// Traversal 
// console.log(studentNames[0]);
// console.log(studentNames[1]);
// console.log(studentNames[2]);
// console.log(studentNames[3]);
for (let i = 0; i < studentNames.length; i++) {
    
    console.log(studentNames[i]);
    
}


// program
// let customerNames = [];

// for(let i = 0; i < 5; i++){
    
//     let customerName = prompt("what is your name?");
//     customerNames.push(customerName);
    
// }

// console.log(customerNames);



console.log(studentNames[4][0]);
console.log(studentNames[5]["name"]);
