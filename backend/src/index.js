const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../config/db');

//middlewares
app.use(express.json());


// rutes
app.use('/api', require('./routes'));


// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
