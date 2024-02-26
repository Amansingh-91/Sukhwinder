// step 1 => select the element / elements to mainuplate

const myTitle = document.querySelector("#title")

// console.log(myTitle);

// step 2 => do mainuplations
// 1. text changing/ content changing

// accessing text

console.log(myTitle.innerText);

console.log(myTitle.textContent);

// changing text
// myTitle.innerText = "my new text";
// myTitle.textContent =myTitle.textContent +  "my new text";

// accessing html

console.log(myTitle.innerHTML);

// changing html 
// myTitle.innerHTML = "<span>I am aman<span>";
// myTitle.innerHTML += "<span>I am aman<span>";
myTitle.innerHTML = "";
// we can create new html elements and append them in our html

const para = document.createElement("p");

para.textContent = "i am the new para";

myTitle.appendChild(para);


// remove element
// myTitle.remove();

// changing the style or applying new style

// not good approach

// myTitle.setAttribute("style","color:red; background-color:blue;");

// myTitle.setAttribute("style","font-size:20px;");


myTitle.style.color = "red";
myTitle.style.fontSize = "35px";
myTitle.style.removeProperty("font-size");
// myTitle.style.color = "blue";

// myTitle.id = "myNewTitle";

console.log(myTitle.classList);

// add new class
myTitle.classList.add("newclass");
myTitle.classList.remove("one");  

myTitle.classList.toggle("second");
myTitle.classList.toggle("second");


// parent child and sibling relation


const span = document.querySelector("#spandemo");
// console.log(span);

console.log(span.parentElement);






