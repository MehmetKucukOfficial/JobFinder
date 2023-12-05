const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const MongoStore = require('connect-mongo'); // import connect-mongo
const session = require('express-session'); // import express-session
const pageRouter = require('./routes/pageRouter'); // import pageRouter
const courseRouter = require('./routes/courseRouter'); // import courseRouter
const categoryRouter = require('./routes/categoryRouter'); // import categoryRouter
const userRouter = require('./routes/userRouter'); // import userRouter

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

//Global Variable

global.userIN = null;


//Middleware
app.use(express.static('public')); // set static folder
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/jobfinder-db' }),
}))
//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

app.use('*', (req, res, next)=> {
  userIN = req.session.userID;
  next();
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
}); // listen on port 3000
