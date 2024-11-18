import mongoose from "mongoose";
import validation from "validation";
const mongooseSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        minLength:[3,"first name  must contain at least 3 characters"]
    },
    lastName:{
        type:String,
        required : true,
        minLength:[3, "last name must contain at least 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validation:[validation.isEmail,"please enter the valid email"]
    },
    phone:{
        type:String,
        reuired:true,
        minlenght:[11,"phone no.  must contain at least 11 digits"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10 ,"message must contain atleast 1o characters"]
    }
}
)
export const message = mongoose.model("message",mongooseSchema)