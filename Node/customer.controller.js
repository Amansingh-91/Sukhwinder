const mongoose = require("mongoose");

const Customer = require("./customer.model")(mongoose);
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
    return re.test(input_str);
    
}
const addNewCustomer = async(req,res)=>{
    // const newCustomer = req.body;
    const {firstName,lastName,email,mobile,address} = req.body;
    const newCustomer = {};
    // validations 0 - 10 = 
    if(firstName && firstName.trim().length >0){
        newCustomer.firstName = firstName.trim();
    }
    else{
        res.status(400).send({success:false,msg:"first name field is required"});
        return;
    }
    if(lastName && lastName.trim().length >0){
        newCustomer.lastName = lastName.trim();
    }
    else{
        res.status(400).send({success:false,msg:"last name field is required"});
        return;
    }
    if(email && email.trim().length >0 && validateEmail(email.trim())){
        newCustomer.email = email.trim();
    }
    else{
        res.status(400).send({success:false,msg:"enter valid email required"});
        return;
    }
    
    if(mobile && mobile.trim().length === 10 && validatePhoneNumber(mobile)){

        newCustomer.mobile = mobile.trim();
    }
    else if (mobile.trim()){
        res.status(400).send({success:false,msg:"enter valid mobile no."});
        return;
    }
    try {
        const resp = await Customer.create(newCustomer);
        res.status(201).send({success:true,msg:"customer created",data:resp});

    } catch (error) {

        console.log(error);
        res.status(400).send({success:false,msg:"some error occured",err:error.toString()});
        return
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

const deleteCustomer = async(req,res)=>{
    const {user} = req.body;

    // validations
    try {
        
        let myUser = await Customer.findOneAndDelete({email:user.email});
        
        res.status(200).send({success:true,msg:"customer deleted"});

    } catch (error) {

        console.log(error);
        res.status(400).send({success:false,msg:"some error occured",err:error.toString()});
    }
}


module.exports = {addNewCustomer,updateCustomer,deleteCustomer};