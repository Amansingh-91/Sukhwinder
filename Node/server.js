const mongoose = require("mongoose");
const express = require("express");
const {addNewCustomer,updateCustomer, deleteCustomer} = require("./customer.controller");
const { addCustomerValidation } = require("./customer.validation");
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

// http://127.0.0.1:8080/get-user/2/profile/male
app.get("/get-user/:id/profile/:gender",(req,res)=>{
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
    console.log(req.headers);
    console.log(req.body);
    res.send("data received in body");
})


// add new customer
app.post("/customer/add",addCustomerValidation,addNewCustomer);

// update customer
app.post("/customer/update",updateCustomer);

// delete customer 
app.post("/customer/delete",deleteCustomer);

// listen to server request

app.listen(8080,()=>{
    console.log("listening on port 8080");
})


// After data received 
// process data => validate data then check requirement then response 
// response process
// response create then send response to client