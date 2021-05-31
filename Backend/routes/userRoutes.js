const express = require('express');
const userController = require('../controller/user');
const driverController = require('../controller/driver');

const router = express.Router();

router.route('/').get(userController.displayUsers).post(userController.addUser);
router.route('/driver').get(driverController.displayDrivers).post(driverController.addDriver);
router.route('/driver/:id').put(driverController.updateDriver).delete(driverController.deleteDriver);
router.route('/login').post(userController.login);

module.exports = router;
