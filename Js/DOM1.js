// document object model
// selection of element on Dom

// selection by id

const title = document.getElementById("Title");

// tagName

const titleUsingTagName = document.getElementsByTagName("h1");

// class

const titleUsingClass = document.getElementsByClassName("one");

// Query

const titleUsingQuery = document.querySelector("#Title");

// query all
const titleUsingQueryAll = document.querySelectorAll(".one");

// 2nd step 

titleUsingQuery.innerText = "JavaScript Tutorial";





