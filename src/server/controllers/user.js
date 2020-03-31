const models = require('../models');
const db = require('../utils/DataBaseUtils');

// callback для express функции get. Создание get запроса на локальный сервер
const findUserByEmail = (req, res, next) => {
  //db.find - метод, делающий выборку всех записей в базе данных в коллекции autos
  return db.findOne(models.user, {email: req.body.email})
    .then(data => res.json(data))
    .catch(error => {
      console.log('[FIND FILTERS]', error);
      return res.sendStatus(500);
    });
};

module.exports = {
  findUserByEmail,
};
