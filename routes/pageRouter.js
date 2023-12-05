const express = require('express'); // import express
const router = express.Router();    // create router

const pageController = require('../controllers/pageController');    // import pageController

router.route('/').get(pageController.getIndexPage);   // create route for index page
router.route('/about').get(pageController.getAboutPage);    // create route for about page
router.route('/register').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);  

module.exports = router;    // export router