const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');
//Check token
 const checkToken = (req, res, next) => {
  const token = req.cookies[config.auth_header];

  if (!token) {
    return res.status(401).json({error: {message: 'JSON error'}});
  }

  try {
    let tokenVerify = jsonwebtoken.verify(token, config.jwt_secret);
    req.token = tokenVerify;
    next();
  } catch (err) {
    return res.status(401).json({error: {message: 'JSON error'}});
  }
};

module.exports = {
  checkToken
}
