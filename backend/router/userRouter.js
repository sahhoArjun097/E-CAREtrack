import express from "express";
import {addNewAdmin, addNewDoc, getAllDetails, getAllDoc, logoutAdmin, logoutPatient, patientRegister} from "../controller/userController.js"
import {login} from "../controller/userController.js"
import {isAdminAuthenticated} from "../middlewares/auth.js"
import {isPatientAuthenticated} from "../middlewares/auth.js"

const router = express.Router()
router.post("/patient/register",patientRegister)
router.post("/login",login)
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin)
router.get("/docters",getAllDoc)
router.get("/admin/me",isAdminAuthenticated,getAllDetails)
router.get("/patient/me",isPatientAuthenticated,getAllDetails)
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin)
router.get("/patient/logout",isPatientAuthenticated,logoutPatient)
router.post("/docter/addnew",isAdminAuthenticated,addNewDoc)

export default router;