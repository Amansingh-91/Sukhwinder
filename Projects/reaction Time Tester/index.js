const shape = document.querySelector("#shape");
const reactionTime = document.querySelector("#reactionTime");
let startTime = Date.now();

const showShape = ()=>{
    moveShape();
    changeShape();

    shape.classList.remove("hide");
    startTime = Date.now();
}

const getScreenWidth = ()=>{
    return window.screen.width;
}

const getScreenHeight = ()=>{
    return window.screen.height;
}

const changeShape = ()=>{
    const x =  Math.round(Math.random() * 2);
    switch (x) {
        case 0:
            shape.style.borderRadius = "50%";
            break;
        case 1:
            shape.style.borderRadius = "0";
            break;

        
        default:
            break;
    }
}

const moveShape = ()=>{
    const width = getScreenWidth();
    const height = getScreenHeight();
    console.log(width,height);
    
    const availabeWidth = width - 2 * shape.offsetWidth;
    const availabeHeight = height- (0.2 * height) - 2 * shape.offsetHeight;
    console.log(shape.offsetWidth,shape.offsetHeight,availabeHeight,availabeWidth);
    
    const top = Math.round(Math.random() * availabeHeight);
    const left = Math.round(Math.random() * availabeWidth);
    console.log(left,top);
    
    shape.style.top = top + "px";
    shape.style.left = left + "px";

}
moveShape();
shape.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    shape.classList.add("hide");
    let stopTime = Date.now();
    const totalTime = (stopTime - startTime)/1000;
    console.log(totalTime);
    reactionTime.textContent = totalTime;
    setTimeout(showShape,2000);  
})


// structure = 