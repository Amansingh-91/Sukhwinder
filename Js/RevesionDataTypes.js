// Number
let x = 12;
// 125.25.toFixed()
x = 125.25.toFixed();
// console.log(x.toFixed());
console.log(x);


let y = Number('123');

console.log(y);

// Boolean 
x =  true;
x = false;
console.log(x);

y = Boolean();

console.log(y);

// String

x = 'aman "is using "'; 
x = "sukh"; 
// let c = x.toUpperCase();
// console.log(c);
console.log(x.toUpperCase());


y = " saini is a 'great person'" + x.toUpperCase();

console.log(y);

x = String([123,124]);
console.log(x);

y = String({name:"Aman",age:29});

console.log(y);

// String Functions


// Array 
x = [12,13];

// add
x.push(14);

console.log(x);

// delete

// console.log(x.pop(),x);

// update
x[0] = 15; // [15,13,14]
console.log(x[1]);

// search / vist

for (let i = 0 ; i < x.length ; i++) {
    if(x[i] === 19){
        console.log("found at index ",i);
        
    }

}

// forEach, map, filter

const myFunc = (element)=>{
    // any logic
    element = element + 1;
    console.log("ele",element);
    // return element;
}
// does not get anything in return 
// no change in values of array
let z = x.forEach(myFunc);

console.log(z,"z");

console.log(x);

// map 


z = x.map(myFunc);


console.log(z,"z");

console.log(x);

const MyFilter = (element)=>{
    if (element % 2 === 0){
        return true;
    }
    return false;

}

// filter
z = x.filter(MyFilter)

console.log(z,"filter");

console.log(x)



// Objects

// create object
// x = {
//     name:"Aman"
// }

x = {};

// add new Properties to obj

x.email  = "aman@abc.com"


x.firstName = "Aman Saini"

x.hoobies = ["dancing","singing"];

x.address = {
    city:"mohali"
}

// update

x.email = "aman@xyz.com";

console.log(x);

// delete 

delete x.email;

console.log(x);

// access

console.log(x.firstName);

console.log(x['address']);

// traverse

for( i in x){
    // console.log(x.i);
    console.log(x[i]);
   
}


