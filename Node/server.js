console.log("mongoose");

// import
const mongoose =  require("mongoose");

const connectToDb = async (URI)=>{
    try{
        await mongoose.connect(URI);
        console.log("connected to DB");
    }
    catch(err){
        console.log(err);
    }
    
}

connectToDb("mongodb://127.0.0.1:27017/school");
console.log("I am here");

// schema => we define structure

const userSchema = new mongoose.Schema({
    Name: {
        type:String
    },
    age : {
        type:Number,
        min:18
    },
    email :{
        type:String,
        required : true,
        toLowerCase:true,
    },
    createdAt:{
        type : Date,
        default: ()=> Date.now()
    },
    updatedAt:{
        type : Date,
        default: ()=> Date.now()
    },
    bestfriend:{
        type: mongoose.SchemaTypes.ObjectId,
    },
    hobbies: {
        type:[String],
    },
    address: {
        type : {
            City:String,
            pin: Number
        }
    }
    
})

// model schema => apply this schema to mongo collection

const User = mongoose.model('users',userSchema);

const getAllUsers = async()=>{
    const allUsers = await User.find();
    console.log(allUsers);
}
getAllUsers();

const insertNewUser = async(newUser)=>{
    const user = await User.create(newUser);
    console.log(user);

}

// insertNewUser({Name:"Aman",age:19});

const updateUser = async()=>{
    // const myUsers = await User.find({Name:"Aman"});
    // console.log(myUsers);
    // myUsers[0].Name = "Aman Saini";
    // myUsers[0].save()

    const myUser = await User.findOne({Name:"Aman"});
    // myUser.Name = "Aman Saini";
    // myUser.age = 19;
    // myUser.gender = "Male";
    myUser.email = "Aman@abc.com";
    await myUser.save();
    console.log(myUser);

    // const myUser = await User.findOneAndUpdate({Name:"Aman Saini"},{gender:"Male"});
    // console.log(myUser);
}

updateUser();
