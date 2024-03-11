// const student = {
//     name: "Aman",
//     age: 29,
//     gender: "male"

// }
// const studentOne = {
//     name:"divya",
//     age:28,
//     course:"IT"
// }


class Student {
    // properties
    constructor(name,age,gender,course) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.course = course;
    }
    // methods
    getName(){
        return this.name;
    }

}


const student = new Student("aman",29,"Male","IT");
const student1 = new Student("divya",29,"Male","IT");
const student2 = new Student("dharam",29,"Male","IT");
const student3 = new Student("jack",29,"Male","IT");
const student4 = new Student("jim",29,"Male","IT");
const student5 = new Student("jhon",29,"Male","IT");


console.log(student4.getName());

const studentOne =  {

}

console.log(studentOne);

let mystr = "I am Aman"

console.log(mystr.toLowerCase());