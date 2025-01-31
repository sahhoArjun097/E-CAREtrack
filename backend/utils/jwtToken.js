import config from "../config/index.js";

export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
    const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

    res.status(statusCode).cookie(cookieName, token, {
        // expires: new Date(Date.now() + config.COOKIE_EXPIRES * 24 * 60 * 60 * 1000), 
        maxAge: config.COOKIE_EXPIRES * 24 * 60 * 60 * 1000, 
        httpOnly: true, // Ensures the cookie is inaccessible to JavaScript
        secure: true, // Set to true if using HTTPS (use `false` in local dev)
        sameSite: none, 
    }).json({
        success: true,
        message,
        user,
        token,
    });
};
