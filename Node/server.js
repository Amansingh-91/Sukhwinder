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
        min:18,
        validate:{
            validator: (v)=>{
                return v % 2 === 0;
            },
            msg:"provide even age"
        }
    },
    email :{
        type:String,
        required : true,
        lowercase:true,
        unique:true,
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
        ref:"users"
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
    
});

userSchema.methods.sayHi = function(){
    console.log(`hello i am ${this.Name}`);
}

userSchema.pre('save',function(next){
    this.updatedAt = Date.now();
    next();
})

// MiddleWare
userSchema.post('save',function(doc,next){
    doc.sayHi();
    next();
})

// model schema => apply this schema to mongo collection

const User = mongoose.model('users',userSchema);

const getAllUsers = async()=>{
    const allUsers = await User.find().populate('bestfriend');
    // console.log(allUsers);
    allUsers.forEach(user=>{
        user.sayHi();
    })
}
// getAllUsers();

const insertNewUser = async(newUser)=>{
    const user = await User.create(newUser);
    console.log(user);

}

// insertNewUser({Name:"julie",age:18,email:"julie@abc.com"});

const updateUser = async()=>{
    // const myUsers = await User.find({Name:"Aman"});
    // console.log(myUsers);
    // myUsers[0].Name = "Aman Saini";
    // myUsers[0].save()

    const myUser = await User.findOne({Name:"julie"});
    // myUser.Name = "Aman Saini";
    // myUser.age = 19;
    // myUser.gender = "Male";
    // myUser.email = "Aman@abc.com";
    myUser.bestfriend = "668566279c875ef9e4e9778e";
    await myUser.save();
    console.log(myUser);

    // const myUser = await User.findOneAndUpdate({Name:"Aman Saini"},{gender:"Male"});
    // console.log(myUser);
}

updateUser();
