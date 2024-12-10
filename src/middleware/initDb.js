const { initializeDB } = require('../database/mongodb');
const { APIError } = require('../utils/error');

const initDB = {
  before: async (handler) => {
    try {
      handler.context.callbackWaitsForEmptyEventLoop = false;
      await initializeDB();
    } catch (err) {
      console.error('Error in DB connection', err);
      throw new APIError(500, 'Error in DB connection');
    }
  },
};

module.exports = {
  initDB,
};
