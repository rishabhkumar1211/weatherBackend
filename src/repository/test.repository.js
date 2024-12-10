const TestModel = require('../models/test.model');

const creatTestDoc = (payload) => {
  return TestModel.create(payload);
};
module.exports = {
  creatTestDoc,
};
