const {query,body} = require("express-validator");

const addCustomerValidation = [
    body('email').trim().notEmpty().withMessage("provide email").isEmail().withMessage("email invalid"),
    body("firstName").trim().notEmpty().withMessage("provide first Name"),
    body("lastName").trim().notEmpty().withMessage("provide last name"),
    body("mobile").optional().trim().isNumeric().isLength({min:10,max:10}).withMessage("Invalid Mobile Number. Please Check"),
    body("gender").notEmpty().
]

const updateCustomerValidation = [

]

module.exports = {addCustomerValidation};