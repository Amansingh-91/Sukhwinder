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

console.log(x.pop(),x);

// update
x[0] = 15;
console.log(x[1]);

// search / vist

for (let i = 0 ; i < x.length ; i++) {
    if(x[i] === 19){
        console.log("found at index ",i);
        
    }

}














