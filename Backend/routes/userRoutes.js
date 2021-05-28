const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.route('/').get(userController.displayUsers).post(userController.addUser);
router.route('/login').post(userController.login);


module.exports = router;