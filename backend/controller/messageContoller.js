import {Message} from "../models/messageSchema.js"
export const sendMessage  = async (req ,res ,next)=>{
    const { firstName, lastName, email, phone, message } = req.body;//take reques from the user like frontend or postman
    if (!firstName || !lastName || !email || !phone || !message){// if there is someting is missing from these
        return res.status(400).json({
            success:false,
            message:"please fill all the details",


        });
    }
    await Message.create({firstName,lastName,email,phone,message});// if every thing is ok 
    res.status(200).json({
        success:true,
        message:"message send successfully",
    });
} 


