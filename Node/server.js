const mongoose = require("mongoose");
const express = require("express");

const connectToDb = async(URI)=>{
    try{
        // "mongodb://127.0.0.1:27017/ecom"
        await mongoose.connect(URI);
        console.log("conneted to db");

    }catch(err){
        console.log(err);
    }
}

connectToDb("mongodb://127.0.0.1:27017/ecom");

//  app

const app =  express();

// extract json data from body
app.use(express.urlencoded());
app.use(express.json());

// get Request

app.get("/users",(req,res)=>{

    res.status(200).json([{user:"Aman"},{user:"jack"},{user:"jhon"}]);
})

// post request
// you can receive data in 3 ways 
// 1. as routing parameters
app.get("/get-user/:id",(req,res)=>{
    console.log(req.params);
    res.send("data received")
})

// 2. query parameters
app.post("/myquery",(req,res)=>{
    console.log(req.query);
    res.send("query received");
})

// 3. body
app.post("/add-user",(req,res)=>{
    console.log(req.body);
    res.send("data received in body");
})

// listen to server request

app.listen(8080,()=>{
    console.log("listening on port 8080");
})

