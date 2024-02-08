// creation of object


// let studentDetails = {};
// console.log(studentDetails);
// // insertion 
// studentDetails["name"] = "Aman";
// console.log(studentDetails);
// studentDetails["age"] = 29;
// studentDetails["address"] = "abc city";
// studentDetails["gender"] = "male";

// studentDetails["name"] = "dharam";
// console.log(studentDetails);



// let name =  "Aman Saini";
// let contactNumber = 8233598921;

let personalDetails = {
    age:29,
    gender:'M',
    age:30,
    speak:function(){
        console.log("I am Speaking");
    }

}; 

personalDetails["name"] = "Aman Saini";
personalDetails["contactNumber"] = 8233598921;

console.log(personalDetails);

// access 
console.log(personalDetails["age"]);
console.log(personalDetails.gender);

personalDetails.speak()

let myObject = new Object(); // {}

// delete property

delete personalDetails["gender"];
console.log(personalDetails);

personalDetails["hoobies"] = ["reading books","playing cricket"];
console.log(personalDetails);

// traversal

for (let i in personalDetails){
    console.log(personalDetails[i]);
}