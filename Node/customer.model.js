const Customer = (mongoose)=>{
    const customerSchema = new mongoose.Schema({
        firstName :{
            type:String,
            required:true,
        },
        lastName :{
            type:String,
            required:true,
        },
        email :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        mobile:{
            type:String,
            minLength:10,
            maxLength:10,
        },
        address:{
            house:{
                type:String
            },
            street:{
                type:String
            },
            city:{
                type:String
            },
            pin:{
                type:String,
                minLength:6,
                maxLength:6,
            }
        }
    });
    
    return mongoose.model("customers",customerSchema);
}

module.exports = Customer;