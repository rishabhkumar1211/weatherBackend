const middy = require('middy');
const { initDB } = require('../middleware/initDb');
const { errorHandler } = require('../middleware/errorHandler');
const ApiTest = require('../routes/api-test');

exports.handler = middy(async (event) => {
  return ApiTest(event);
})
  .use(initDB)
  .use(errorHandler);
