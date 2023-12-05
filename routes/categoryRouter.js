const express = require('express'); // import express
const router = express.Router(); // create router

const categoryController = require('../controllers/categoryController'); // import pageController

router.route('/').post(categoryController.createCategory); // http://127.0.0.1:3000/categories


module.exports = router; // export router
