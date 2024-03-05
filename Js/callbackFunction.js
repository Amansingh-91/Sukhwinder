// function passed as parameter

function doWork(){
    console.log("connections server");
    console.log("working on login");
}

function doWorkCall(work){
    console.log("connections server");
    work();
}

doWork();
doWorkCall(()=>{
    console.log("working on login call");
})

doWorkCall(()=>{
    console.log("working on signup call");
})