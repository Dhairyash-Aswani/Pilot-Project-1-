const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to add a new user (POST /api/users)
// ✅ FIX: The GET route should be the base route ('/') for /api/users
router.post('/', userController.addUser);

// Route to get all users (GET /api/users) - CRITICAL for populating the table
// ✅ FIX: Change '/users' to '/'
// The full path will be: [Base in app.js] + [Route here] = /api/ + / = /api/users
router.get('/', userController.getUsers); 

module.exports = router;
