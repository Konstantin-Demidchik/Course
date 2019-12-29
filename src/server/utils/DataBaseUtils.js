const mongoose = require('mongoose');

const connection = () => {
  return mongoose.connect(`mongodb://admin:123QWEasd@ds241055.mlab.com:41055/heroku_36s6v3pg`);
};

const find = (model, filters = {}) => {
  return model.find(filters);
};

module.exports = {
  connection,
  find,
};
