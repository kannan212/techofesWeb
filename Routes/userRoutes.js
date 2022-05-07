const express = require('express');
const userController = require('../Controllers/userController');


const router = express.Router();

router.get('/register', userController.register);



module.exports = router;
