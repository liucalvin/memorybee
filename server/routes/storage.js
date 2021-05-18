const router = require('express').Router();
const verify = require('../middleware/verification');
const { wordValidation } = require('../model/validation');
const pool = require('../db');
const axios = require('axios').default;

const baseUrl = 'https://wordsapiv1.p.rapidapi.com/words'

router.post('/:userId/words', verify, async (req, res) => {

  try {
    const { error } = wordValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const word = req.body.word;
    const userId = req.params.userId;
    const queryHeaders = {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST
    };

    const examplesQuery = {
      method: 'GET',
      url: `${baseUrl}/${word}/examples`,
      headers: queryHeaders
    };

    const definitionQuery = {
      method: 'GET',
      url: `${baseUrl}/${word}/definitions`,
      headers: queryHeaders
    };

    const examples = await axios.request(examplesQuery);
    const definition = await axios.request(definitionQuery);

    const wordExists = await pool.query(
      'SELECT * FROM words WHERE word = $1 AND user_id = $2',
      [word, userId]
    );

    if (wordExists.rows[0]) {
      return res.status(400).send('Word already saved.');
    }

    const insertedWord = await pool.query(
      'INSERT INTO words (word, user_id, definition, examples) VALUES ($1, $2, $3, $4) RETURNING *',
      [word, req.params.userId, definition.data.definitions, examples.data.examples]
    );

    res.json(insertedWord.rows[0]);

  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
})

router.get('/:userId/words', verify, async (req, res) => {
  try {
    const words = await pool.query(
      'SELECT word, definition, examples FROM users INNER JOIN words ON words.user_id = users.id'
    );

    if (!words.rows[0]) {
      return res.send("You don't have any saved words yet.");
    }

    res.send(words.rows);
    
  } catch (error) {
    console.log(error.message)
    res.status(400).send(error.message);
  }
})

router.delete('/:userId/words/:word', verify, async (req, res) => {
  try {
    const word = req.params.word;
    const userId = req.params.userId;

    const wordExists = await pool.query(
      'SELECT * FROM words WHERE word = $1 AND user_id = $2',
      [word, userId]
    );

    if (!wordExists.rows[0]) {
      return res.status(400).send('That word doesn\'t exist in your saved words.');
    }

    await pool.query(
      'DELETE FROM words WHERE words.word = $1 AND words.user_id = $2',
      [word, userId]
    );
    res.send(`The word ${word} has been deleted from your saved words.`)
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = router