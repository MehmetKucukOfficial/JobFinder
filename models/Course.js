const mongoose = require('mongoose'); // import mongoose
const scehma = mongoose.Schema; // create schema
const slugify = require('slugify'); // import slugify

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
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

courseSchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Course = mongoose.model('Course', courseSchema); // create model
module.exports = Course; // export model
