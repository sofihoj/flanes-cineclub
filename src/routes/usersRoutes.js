const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/login', usersController.login)
router.get('/signup', usersController.signup)
router.get('/profile', usersController.profile)
router.get('/profile/my-movies', usersController.movies)

module.exports = router;
