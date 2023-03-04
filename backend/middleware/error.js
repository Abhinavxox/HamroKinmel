const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  //if there is no statuscode just return 500 as internal server error
  err.statusCode = err.statusCode || 500;

  //for development mode
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  //for production mode
  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };

    error.message = err.message;

    //Wrong mongoose object id error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid : ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    //Handling mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
