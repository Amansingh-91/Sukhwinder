// let firstName =  "Aman";

// let studentNames = ["Aman","jhon",123,true,["age"],{name:"aman"},null,undefined]; 

let studentNames = [];

// to add data/ insert

// push function
studentNames.push("Aman");
console.log(studentNames);
studentNames.push("dharam");
console.log(studentNames);
studentNames.push("jack");
console.log(studentNames);
studentNames.push("jhon");
console.log(studentNames);
studentNames.push("jim");
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



