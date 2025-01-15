import app from "../app.js";
import { catchAsyncError } from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import { Appointment } from "../models/appointmentSchema.js"
import { User } from "../models/userSchema.js"

export const postAppointmnet = catchAsyncError(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        appointment_date,
        department,
        docter_firstName,
        docter_lastName,
        hasVisited,
        address
    } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !nic ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !docter_firstName ||
        !docter_lastName ||
        !address) {
        return next(new ErrorHandler("please fill full form", 400));
    }
    console.log(docter_firstName ,docter_lastName)
    const ss = await User.findOne({
        firstName: docter_firstName,
        lastName: docter_lastName,
        role: "Docter",
        docterDepatement: department,

    })
    console.log(ss);

    const isConflict = await User.find({
        firstName: docter_firstName,
        lastName: docter_lastName,
        role: "Docter",
        docterDepatement: department,

    })
    if (isConflict.length === 0) {
        return next(new ErrorHandler("docterr not found", 404))
    }
    if (isConflict.length > 1) {
        return next(new ErrorHandler("docter conflict  please connect through email", 404))
    };
    const docterId = isConflict[0]._id;
    const patientId = req.user.id;
    const appointment = await Appointment.create({
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        appointment_date,
        department,
        docter: {
            firstName: docter_firstName,
            lastName: docter_lastName,
        },
        hasVisited,
        address,
        docterId,
        patientId
    });
    res.status(200).json({
        success:true,
        message:"appointment send successfully!",
        appointment,
    })
});

export const getAllAppointments = catchAsyncError(async(e=req,res,next)=>{
        const appointments  = await Appointment.find();
        res.status(200).json({
            success:true,
            appointments,
        })
})

export const updateAppointmentStatus = catchAsyncError(async(req,res,next)=>{
    const {id}  = req.params;
    let appointment = await Appointment.findById(id);
    if(!appointment){
        return next(new ErrorHandler("appointment not found",404));

    }
    appointment = await Appointment.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    res.status(200).json({
        success:true,
        message:"appointment status updated",
        appointment,
    })
});
export const deletAppointment = catchAsyncError(async(req,res,next)=>{
    const {id}  = req.params;
    let appointment = await Appointment.findById(id);
    if(!appointment){
        return next(new ErrorHandler("appointment not found",404));

    }
    await appointment.deleteOne();
    res.status(200).json({
        success:true,
        message:"appointment deleted",

    })
})