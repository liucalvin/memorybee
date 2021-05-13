const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require('./routes/authentication');

dotenv.config()

app.use(cors())
app.use(express.json()); // req.body

app.use('/api/users', authRoute)

app.listen(5000, () => {
  console.log('server running on port 5000');
})