const express = require('express');
const { isAuthenticated } = require('../controllers/authController');
const { postLoginInfo, logout } = require('../controllers/loginController');
const { postUser, getUser } = require('../controllers/signupController');
const router = express.Router();

router.post('/user', postUser);

router.post('/login', postLoginInfo);

router.get('/user/:id', getUser);

router.post('/logout', logout);

router.get('/isAuthenticated', isAuthenticated);

module.exports = router;
