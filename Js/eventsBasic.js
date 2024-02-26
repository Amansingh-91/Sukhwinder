
// selecting the element

const span =  document.querySelector("#title > span");
// console.log(span);

const handleClick = (e)=>{
    console.log(e);
    if(span.style.color == "red"){
        span.style.color = "blue";
    }
    else{
        span.style.color = "red";
    }
}

// add event listener

span.addEventListener("click",handleClick)


span.removeEventListener("click",handleClick)