import config from "../config";

export const generateToken = (user ,message,statusCode,res)=>{
    const token = user.generateJsonWebToken();
    const cookieName  = user.role==="Admin" ? "adminToken" : "patientToken";
    res.status(statusCode).cookie(cookieName,token,{
        expries:new Date(Date.now()+config.COOKIE_EXPIRES*24*60*60*1000),
        httpOnly:true,
    }).json({
        success:true,
        message,
        user,token,
    });
}
