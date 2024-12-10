const { failure } = require('../utils/responses');

const errorHandler = {
  onError: async (handler) => {
    const { error } = handler;
    console.error('Error in middleware', error);
    handler.response = failure(error?.statusCode, error?.message);
  },
};

module.exports = {
  errorHandler,
};
