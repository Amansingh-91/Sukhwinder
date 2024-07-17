const mongoose = require("mongoose");

const Customer = require("./customer.model")(mongoose);

const addNewCustomer = async(req,res)=>{
    const newCustomer = req.body;
    // validations
    try {
        const resp = await Customer.create(newCustomer);
        res.status(201).send({success:true,msg:"customer created",data:resp});

    } catch (error) {

        console.log(error);
        res.status(400).send({success:false,msg:"some error occured",err:error.toString()});
    }
}

const updateCustomer = async(req,res)=>{
    const {user,updates} = req.body;

    // validations
    try {
        
        let myUser = await Customer.findOne({email:user.email});
        for (const key in updates) {
            myUser[key] = updates[key];
        }
        await myUser.save();
        res.status(201).send({success:true,msg:"customer updated"});

    } catch (error) {

        console.log(error);
        res.status(400).send({success:false,msg:"some error occured",err:error.toString()});
    }
}

module.exports = {addNewCustomer,updateCustomer};