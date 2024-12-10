function success(data, status) {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    statusCode: status || 200,
    body: JSON.stringify({
      status: 'success',
      statusCode: status || 200,
      message: data.message,
      data: data.data,
    }),
  };
}

function failure(statusCode, message) {
  return {
    statusCode: statusCode || 500,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      status: 'failure',
      statusCode: statusCode || 500,
      message: message || 'Internal Server Error',
    }),
  };
}

module.exports = {
  success,
  failure,
};
