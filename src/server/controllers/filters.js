const models = require('../models');
const db = require('../utils/DataBaseUtils');

// callback для express функции get. Создание get запроса на локальный сервер
const findFilters = (req, res, next) => {
  return db.find(models.filters, {})
    .then(data => res.json(data))
    .catch(error => {
      console.log('[FIND FILTERS]', error);
      return res.sendStatus(500);
    });
};

module.exports = {
  findFilters,
};
