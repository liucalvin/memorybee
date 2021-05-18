const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const storageRoute = require('./routes/storage');
const rateLimiter = require('./middleware/ratelimiter');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use('/api/users', authRoute);
app.use('/api/users', storageRoute);

app.listen(5000, () => {
  console.log('server running on port 5000');
})