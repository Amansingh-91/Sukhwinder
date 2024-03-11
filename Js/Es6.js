// spread operator
let a = [1,2,3,45,6];
let b = [1,4,6,7,89,10];

// if(a.length > b.length){
//     a.forEach(data=>{
//         b.push(data);
//     })
//     console.log(b);
// }
// else{
//     b.forEach(data=>{
//         a.push(data);
//     })
//     console.log(a);
// }

let c = [...a,...b]

console.log(c);


let onw = {
    name:"aman",
    age:29
}

let student = {
    ...onw,
    gender:"Male"
}

console.log(student);


// destructuring

// const studentName = student.name;
// const studentage = student.age;

const {name,age,course} =student;

console.log(name,age,course);


// class ,Array => map , filter, forEach

