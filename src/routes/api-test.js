const { creatTestDoc } = require('../repository/test.repository');

const { success, failure } = require('../utils/responses');

const ApiTest = async (event) => {
  try {
    await creatTestDoc({
      name: 'test',
      title: 'test',
    });
    return success({
      success: true,
    });
  } catch (err) {
    console.error('Error in api check api credentials', err);
    return failure(err?.statusCode, err?.message);
  }
};

module.exports = ApiTest;
