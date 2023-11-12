const express = require('express'); // import express

const app = express(); // create express app

//Template Engine
app.set('view engine', 'ejs'); // set view engine to ejs

//Middleware
app.use(express.static('public')); // set static folder

//Routes
app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
}); // listen on port 3000
