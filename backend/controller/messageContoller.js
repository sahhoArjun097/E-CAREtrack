import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js"; // Corrected import

export const sendMessage = catchAsyncError(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body; // Take request from the user like frontend or Postman
    if (!firstName || !lastName || !email || !phone || !message) { // Check if something is missing
        return next(new ErrorHandler("Please fill full form", 400)); // Corrected "ErroHandler" to "ErrorHandler"
        
    }
    
    await Message.create({ firstName, lastName, email, phone, message }); 
    res.status(200).json({
        success: true,
        message: "Message sent successfully",
    });

    
});

    
export const getAllMessages = catchAsyncError(async(req,res,next)=>{
    const message = await Message.find();
    res.status(200).json({
        success: true,
        message,    
    })})

// import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
// import { Message } from "../models/messageSchema.js";
// import ErrorHandler from "../middlewares/errorMiddleware.js"; // Corrected import

// export const sendMessage = catchAsyncError(async (req, res, next) => {
//     const { firstName, lastName, email, phone, message } = req.body;

//     // Log the received data
//     console.log("Received request data:", { firstName, lastName, email, phone, message });

//     // Check if any required field is missing
//     if (!firstName || !lastName || !email || !phone || !message) {
//         console.log("Validation error: Some required fields are missing");
//         return next(new ErrorHandler("Please fill full form", 400));
//     }

//     // Attempt to save the message
//     try {
//         const newMessage = await Message.create({ firstName, lastName, email, phone, message });
//         console.log("Message saved successfully:", newMessage);
//         res.status(200).json({
//             success: true,
//             message: "Message sent successfully",
//         });
//     } catch (error) {
//         console.error("Error saving message:", error);
//         return next(new ErrorHandler("Failed to save the message", 500));

//     }
// });
