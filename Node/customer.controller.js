const mongoose = require("mongoose");
const {validationResult} = require("express-validator");
// CRUD = 
const Customer = require("./customer.model")(mongoose);
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);   
}
function validateName(name){
    if(name && name.trim().lenght > 0){
        return name.trim();
    }
    return false;
}
const addNewCustomer = async(req,res)=>{

    const validation = validationResult(req);

    console.log(validation.errors.length);
    if(validation.errors.length > 0){
        return res.send({success:false,msg:"checking validation",err:validation.errors});
    }
    // login check

    // const newCustomer = req.body;
    const {firstName,lastName,email,mobile,address} = req.body;
    const newCustomer = {};
    // validations 0 - 10 = 
    // if(firstName && firstName.trim().length >0){
    //     newCustomer.firstName = firstName.trim();
    // }
    // else{
    //     res.status(400).send({success:false,msg:"first name field is required"});
    //     return;
    // }
    // if(lastName && lastName.trim().length >0){
    //     newCustomer.lastName = lastName.trim();
    // }
    // else{
    //     res.status(400).send({success:false,msg:"last name field is required"});
    //     return;
    // }
    // if(email && email.trim().length >0 && validateEmail(email.trim())){
    //     newCustomer.email = email.trim();
    // }
    // else{
    //     res.status(400).send({success:false,msg:"enter valid email required"});
    //     return;
    // }
    
    // if(mobile && mobile.trim().length === 10 && validatePhoneNumber(mobile)){

    //     newCustomer.mobile = mobile.trim();
    // }
    // else if (mobile.trim()){
    //     res.status(400).send({success:false,msg:"enter valid mobile no."});
    //     return;
    // }
    try {
        newCustomer.firstName = firstName;
        newCustomer.lastName = lastName;
        newCustomer.email = email;
        newCustomer.mobile = mobile;

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
        if(user && user.firstName && validateEmail(user.email)){
            let myUser = await Customer.findOne({email:user.email});
            if(myUser){
                for (const key in updates) {
                    if(key == "email"){
                        return res.status(200).send({success:false,msg:"customer are not allowed to change email"});

                    }
                    if(key == "mobile" && validatePhoneNumber(updates[key].trim())){
                        myUser[key] = updates[key].trim();
                    }

                    if(key =="firstName" && validateName(updates[key])){
                        myUser[key] = updates[key].trim();
                    }
                    
                    
                }
                await myUser.save();
                return res.status(201).send({success:true,msg:"customer updated"});
            }
            else{
                return res.status(200).send({success:false,msg:"customer does not exist. please add customer"});
            }
            
        }
        

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