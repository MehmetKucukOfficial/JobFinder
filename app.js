const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const pageRouter = require('./routes/pageRouter'); // import pageRouter
const courseRouter = require('./routes/courseRouter'); // import courseRouter

const app = express(); // create express app

//Database Connection

mongoose.connect('mongodb://localhost/jobfinder-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(() => {
  console.log('Connected to database');
});
   // connect to database

//Template Engine
app.set('view engine', 'ejs'); // set view engine to ejs

//Middleware
app.use(express.static('public')); // set static folder
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
}); // listen on port 3000
