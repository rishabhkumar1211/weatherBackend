const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
module.exports = model('test', testSchema);
