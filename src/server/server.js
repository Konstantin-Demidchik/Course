// подключение модуля express
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//подключение базы данных, MongoDB
const db = require('./utils/DataBaseUtils');
// подключение модуля cors, для реализации запросов с других доменов
const cors = require('cors');
// callback для route на локальном севере при помощи метода get в express. Получение информации по по routes
// Создание get запроса на локальный сервер
const controllers = require('./controllers');

const passport = require('passport');

const middlewares = require('./middlewares');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/autos', middlewares.checkToken, controllers.autos.findAutos);


/*app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/');
});*/

app.post('/auth', controllers.user.auth);

app.get('/filters', middlewares.checkToken, controllers.filters.findFilters);

app.get('/create', controllers.user.createUser);
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
