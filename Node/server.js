const events = require("events");
const fs = require("fs");

const emitter = new events.EventEmitter();
const myFile = fs.createReadStream("./demo.txt");
emitter.on("aag lag gye",()=>{
    console.log("pani dalo");
})

myFile.on("data",(chunk)=>{
    console.log(chunk.toString());
});

emitter.emit("aag lag gye");

console.log("i am here");