const span = document.querySelector("#spandemo");

const p = document.querySelector("p");


p.addEventListener("click",(e)=>{
    
    console.log("p clicked");
});

span.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("span clicked");
});