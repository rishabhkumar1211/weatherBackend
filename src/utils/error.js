class APIError extends Error {
  constructor(statusCode = 500, message = '', details = null, stack = null) {
    super(message?.toString()); // Call the parent `Error` constructor with the message
    this.name = this.constructor.name; // Set the error name as `APIError`
    this.statusCode = statusCode;
    this.details = details;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace
    }
  }
}

module.exports = {
  APIError,
};
