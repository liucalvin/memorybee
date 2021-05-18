const jwt = require('jsonwebtoken');

module.exports = function verify(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Unauthorized request.')
  }

  try {
    const verification = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verification;
    next();
  } catch (error) {
    res.status(400).send('Invalid authorization token.');
  }
}
