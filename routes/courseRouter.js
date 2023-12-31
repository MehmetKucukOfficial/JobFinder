const express = require('express'); // import express
const router = express.Router(); // create router

const courseController = require('../controllers/courseController'); // import pageController

router.route('/').post(courseController.CreateCourse); // create route for index page 
router.route('/').get(courseController.getAllCourses); // create route for about page
router.route('/:slug').get(courseController.getCourse);//127.0.0.1:3000/courses/:slug

module.exports = router; // export router
