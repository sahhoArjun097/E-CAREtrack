class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500; // Fix: Ensure statusCode is set correctly

    // Handle duplicate key error (MongoDB specific)
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
        err = new ErrorHandler(message, 400);
    }

    // Handle invalid JWT error
    if (err.name === "JsonWebTokenError") {
        const message = "JSON Web Token is invalid. Try again.";
        err = new ErrorHandler(message, 400);
    }

    // Handle expired JWT error
    if (err.name === "TokenExpiredError") {
        const message = "JSON Web Token has expired. Try again.";
        err = new ErrorHandler(message, 400);
    }

    // Handle invalid Mongoose ObjectId error
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}.`;
        err = new ErrorHandler(message, 400);
    }

    const  errorMessage = err.errors ?  Object.values(err.errors).map(error =>error.message).join(" "): err.message;
        // Send the error response
    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    });
};

export default ErrorHandler;

