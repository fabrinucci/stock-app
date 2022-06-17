require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  console.log('Request Received');
  res.send('<h2>Hello Dude!</h2>')
})

app.listen( PORT, () => {
  console.log(`Server running in port: ${ PORT }`)
})