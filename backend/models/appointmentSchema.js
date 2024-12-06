import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
appointment_date:{
    type:String,
    required:true,

},
department:{
    type:String,
    reqired:true
},
docter:{
    firstName:{
        type:String,
        reqired:true
    
    },
    lastName:{
        type:String,
        reqired:true
    
    }

},
hasVisited:{
    type:String,
    default:false
},
docterId:{
    type:mongoose.Schema.ObjectId,
    required:true,
},
patientId:{
    type:mongoose.Schema.ObjectId,
    required:true,

},
address:{
    type:String,
    required:true,
},
// docAvatar:{
//     public_id:String,
//     url:String
// }
status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending"
}

});
export const Appointment = mongoose.model("Appointment",appointmentSchema)
