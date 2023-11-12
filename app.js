const express = require('express'); // import express

const app = express(); // create express app

app.get('/', (req, res) => {
  res.status(200).send('INDEX PAGE');
}); // create route for home page

const port = 3000; // port to listen on
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
}); // listen on port 3000
