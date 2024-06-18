// 3 type module 
// in built 
// third party 
// user defined

// file system(fs),path,url,os,http,https,

// create, update, delete

const fs = require("fs");


// const data = fs.readFileSync("./demo.txt",{encoding:"utf8"});

// console.log(data);

fs.readFile("./demo.txt",{encoding:"utf8"},(err,data)=>{
    console.log(data);
    console.error(err);
})

const data = "I am super hero";
fs.writeFile("./demo1.txt",data,(err)=>{
    console.log(err);
})
