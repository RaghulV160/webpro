// routes/userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateToken } = require('../authUtils');
// User login (verify credentials)
router.post('/login', userController.getUserByUsernameAndPassword);
// Add a new user
router.post('/add', userController.addUser);
// Get all users (protected)
router.get('/all', validateToken, userController.getAllUsers);

module.exports = router;
