class ErrorHandler extends Error {
  constructor(message, statusCode) {
    //Error class constructor
    super(message);
    this.statusCode = statusCode;

    //creates .stack property on target object
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
