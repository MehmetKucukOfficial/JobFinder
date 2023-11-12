const mongoose = require('mongoose'); // import mongoose
const scehma = mongoose.Schema; // create schema

const courseSchema = new scehma({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Course = mongoose.model('Course', courseSchema); // create model
module.exports = Course; // export model
