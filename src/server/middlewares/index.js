const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');

//Check token
 const checkToken = (req, res, next) => {
  console.log(req.cookies)
  const token = req.cookies[config.auth_header];

  if (!token) {
    return res.status(401).json({error: {message: 'Not found token'}});
  }

  try {
    let tokenVerify = jsonwebtoken.verify(token, config.jwt_secret);
    req.token = tokenVerify;
    next();
  } catch (err) {
    return res.status(401).json({error: {message: 'Token incorrect'}});
  }
};

module.exports = {
  checkToken
}
