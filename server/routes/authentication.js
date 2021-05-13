const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('../db/index')
const { registrationValidation, loginValidation } = require('../model/validation');

router.post('/register', async (req, res) => {
  const { error } = registrationValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  const emailExists = await pool.query(
    'SELECT 1 FROM users WHERE email = $1',
    [email]
  );
  if (emailExists) {
    return res.status(400).send('Email already exists.');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    const user = await pool.query(
      'INSERT INTO users (email, username, password) VALUES($1, $2, $3)',
      [email, username, hashedPassword]
    );
    res.json(user.rows[0]);
  } catch (err) {
    res.status(400).send(err);
  }
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await pool.query(
    'SELECT 1 FROM users WHERE email = $1',
    [email]
  );
  if (!user) {
    return res.status(400).send('Email not found.');
  }

  const passwordIsValid = await bcrypt.compare(req.body.password, user.password)
  if (!passwordIsValid) {
    return res.status(400).send('Password incorrect.');
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN)
  res.header('auth-token', token).send({ token: token, userId: user._id });
})

module.exports = router;