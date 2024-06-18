const http = require("node:http");
const path = require("path")
const fs =  require("fs");
const { log } = require("node:console");
// console.log("hii I am aman");


const server = http.createServer((req, res)=>{
    // console.log(req.headers.host);
    // console.log(path.join(req.headers.host,req.url));
    if(req.url ==="/" && req.method === "POST"){
        res.writeHead(200,"OK",{"content-type":"text/html"})
        res.end("<h1>home Page</h1>")
    }
    else if(req.url ==="/" && req.method === "GET"){
        res.writeHead(200,{"content-type":"text/html"})
        const data = fs.readFileSync("./staticApp/index.html",{encoding:"utf-8"});
        log(data);
        res.end(data)
    }
    else if(req.url === "/about" && req.method === "GET"){
        res.writeHead(200,{"content-type":"text/html"})
        const data = fs.readFileSync("./staticApp/about.html",{encoding:"utf-8"});
        res.end(data)
    }
    else if(req.url === "/common.css" && req.method === "GET"){
        res.writeHead(200,{"content-type":"text/css"})
        const data = fs.readFileSync("./staticApp/common.css",{encoding:"utf-8"});
        res.end(data)
    }
    else if(req.url === "/index.js" && req.method === "GET"){
        res.writeHead(200,{"content-type":"text/javascript"})
        const data = fs.readFileSync("./staticApp/index.js",{encoding:"utf-8"});
        res.end(data)
    }
    else{
        res.writeHead(404,"NOT FOUND",{"content-type":"text/html"});
        res.end("<h1>Page not found</h1>")

    }
});

server.listen(3000,()=>{
    console.log("Listening on port 3000");
});


// Importing in Node

// common js
// const fs = require("fs");

//module 
// import fs from "fs";