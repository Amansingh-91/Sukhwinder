let firstName = "Aman";
let lastName = 'Saini';
// multiple line string  we use back tick ` 
let address = `plat 123,
city xyz,
state wrt
`;
let mynewString = new String("    Aman    ");

// string concatination or joining two string
let myString = "My name is " + firstName+" " + lastName ;
console.log(myString);

// formated String

let myFormet = `My name is ${firstName} ${lastName} and my address is ${address}`;

console.log(myFormet);

// inbuilt functions

console.log(firstName.toUpperCase());

console.log(lastName.toLowerCase());

console.log(address.length);

console.log(mynewString);

console.log(mynewString.length);

console.log(mynewString);

console.log(mynewString.trim().toLowerCase());




