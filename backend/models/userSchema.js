import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must contain at least 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must contain at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate:[ validator.isEmail,"Please enter a valid email address"
        ]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [11, "Phone number must contain at least 11 digits"]
    },
    nic :{
        type:String,
        required:[true,""],
        maxLength: [15, "NIC must not exceed 15 digits"], // Adjust max length based on your requirements
        minLength: [11, "NIC must contain at least 11 digits"],
   },
   dob :{
    type:Date,
    required:[true,"DOB is required"],
},
gender:{
    type:String,
    required:true,
    enum:["Male","Female","Other"]
},
password:{
    type:String,
    required:true,
    minLength:[8,"password must contain 8 digit"],
    select:false
},
role:{
    type:String,
    required:true,
    enum:["Admin","Patient","Docter"],
},
DocterDepatement:{
    type:String,

},
docAvatar:{
    public_id:String,
    url:String
}
});

// now the password that user entered get dectrypted and stored in database
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});
// now the password that user put for login is checked by the password that is stored in database
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
    
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    })
}
export const User = mongoose.model("user", userSchema);
