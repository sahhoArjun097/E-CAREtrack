import express from "express";
import { deletAppointment, getAllAppointments, postAppointmnet, updateAppointmentStatus } from "../controller/appointmentContoller.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post",isPatientAuthenticated, postAppointmnet);
router.get("/getall",isAdminAuthenticated, getAllAppointments);
router.put("/update/:id",isAdminAuthenticated, updateAppointmentStatus);// :id necessary
router.delete("/delete/:id",isAdminAuthenticated, deletAppointment);// :id necessary

export default router;



 