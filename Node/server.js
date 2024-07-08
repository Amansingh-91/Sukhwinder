// express

// console.log("express");

const express = require("express");

const app = express();

// get, post, put, patch, delete, listen, use

// 3000 9999

// app.get("/",(req,res)=>{
//     res.status(200).setHeader("content-type","text/plain").send("Hello Friends");
// })
// app.get("/user",(req,res)=>{
//     res.setHeader("content-type","application/json");
//     res.json({"Name":"Aman Saini","Age":29});
// })

// app.get("/aman",(req,res)=>{
//     res.sendFile("./demo.txt",{root:"./"});
// })

app.use("/",express.static("./staticApp/public"));

app.get("/",(req,res)=>{
    res.status(200).sendFile("./staticApp/index.html",{root:"./"});
})
// app.get("/common.css",(req,res)=>{
//     res.status(200).sendFile("./staticApp/common.css",{root:"./"});
// })

// app.get("/index.js",(req,res)=>{
//     res.status(200).sendFile("./staticApp/index.js",{root:"./"});
// })
app.listen(8000,()=>{
    console.log("listening on port 8000");
})
