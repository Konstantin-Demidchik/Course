const models = require('../models');
const db = require('../utils/DataBaseUtils');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');


const findUserByEmail = (req, res, next) => {
  return db.findOne(models.user, {email: req.body.email})
    .then(data => res.json(data))
    .catch(error => {
      console.log('[FIND FILTERS]', error);
      return res.sendStatus(500);
    });
};

/*const auth = (req, res, next) => {

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({error: {message: 'Params not found'}});
  }
  return db.findOne(models.user, { email }).then((user) => {
    if (user) {
      user.comparePassword(password).then((isCompare) => {
        if(isCompare) {
          const dataToken = {
            id: user.id,
            email: user.email,
            name: user.name
          }
          const token = jsonwebtoken.sign(dataToken, config.jwt_secret, { expiresIn: config.expires_in });
          res.cookie('test', 'test');
          return res.json({
            token
          });
        } else {
          return res.status(400).json({error: {message: 'User not found'}});
        }
      });
    }
    else {
      return res.status(400).json({error: {message: 'User not found'}});
    }
  })
}; */
const auth = (req, res, next) => {
  res.cookie('test', 'test');
  return res.json({cookie: true});
};
const createUser = (req, res, next) => {
  return models.user.create({
    email: 'test',
    name: 'test',
    password: 'test'
  }).then(user => res.json(user))
  .catch(error => res.status(400).json({error: {message: 'User not found'}}))
}

module.exports = {
  findUserByEmail,
  auth,
  createUser
};
