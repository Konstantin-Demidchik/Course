const mongoose = require('mongoose');

const connection = () => {
  return mongoose.connect(`mongodb://kostya:123QWEasd@82.209.201.91:4324/86444`);
};

const find = (model, filters = {}) => {
  return model.find(filters);
};

const findOne = (model, filters = {}) => {
  return model.findOne(filters);
};

module.exports = {
  connection,
  find,
  findOne
};
