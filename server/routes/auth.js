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
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (emailExists.rows[0]) {
    return res.status(400).send('Email already exists.');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    const user = await pool.query(
      'INSERT INTO users (email, username, password) VALUES($1, $2, $3) RETURNING *',
      [email, username, hashedPassword]
    );
    res.json(user.rows);
    console.log("registered");
  } catch (err) {
    res.status(400).send(err);
  }
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  console.log(req.body.email);

  const user = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [req.body.email]
  );

  if (!user.rows[0]) {
    return res.status(400).send('Email not found.');
  }

  const passwordIsValid = await bcrypt.compare(req.body.password, user.rows[0].password)
  if (!passwordIsValid) {
    return res.status(400).send('Password incorrect.');
  }

  const token = jwt.sign({ id: user.rows[0].id }, process.env.SECRET_TOKEN)
  res.header('auth-token', token).send({ token: token, id: user.rows[0].id });
})

module.exports = router;