const http = require("node:http");
const path = require("path")
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

        res.end("<h1>Home Page GET</h1>")
    }
    else if(req.url === "/sukh"){
        res.end("<h1>I am Sukh</h1>")
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