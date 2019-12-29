// подключение модуля express
const express = require('express');
//подключение базы данных, MongoDB
const db = require('./utils/DataBaseUtils');
// подключение модуля cors, для реализации запросов с других доменов
const cors = require('cors');
// callback для route на локальном севере при помощи метода get в express. Получение информации по по routes
// Создание get запроса на локальный сервер
const controllers = require('./controllers');

const app = express();

app.use(cors({
    "origin": "*",
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
}));

app.get('/autos', controllers.autos.findAutos);

app.get('/filters', controllers.filters.findFilters);
// создание локального сервера на порте 8080 и подключение MongoDB
const server = app.listen(8080, () => {
  console.log('Server is started');
  db.connection()
    .then(() => console.log('Connection Mongo'))
    .catch(error => {
      console.log('error', error);
      throw new Error(error);
    });
});
