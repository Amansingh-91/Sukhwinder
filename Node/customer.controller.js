const mongoose = require("mongoose");

const Customer = require("./customer.model")(mongoose);

const addNewCustomer = async(req,res)=>{
    const newCustomer = {
//  we get data from req
    }
    // validations
    try {
        await Customer.create(newCustomer);
    } catch (error) {
        console.log("error");
    }
}