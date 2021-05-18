const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 250,
  message: 'You have exceeded your daily maximum of 250 requests.',
  headers: true,
});