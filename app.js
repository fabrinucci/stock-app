const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Request Received');
  res.send('<h2>Hello Dude!</h2>')
})

app.listen('4000', () => {
  console.log('Server running in port: 4000')
})