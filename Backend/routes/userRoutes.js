const express = require('express');
const userController = require('../controller/user');
const expenseController = require('../controller/expesnes');
const incomeController = require('../controller/incomeController');

const router = express.Router();

router.route('/').get(userController.displayUsers).post(userController.addUser);
router.route('/:id').put(userController.updateUser).delete(userController.deleteUser);
router.route('/login').post(userController.login);
router.route('/current').post(userController.getCurrentUser);
router.route('/driver').get(userController.findDrivers);
router.route('/income').get(incomeController.getIncome).put(incomeController.addIncome);
router.use(userController.protect);
router.route('/expenses').get(expenseController.getExpenses).patch(expenseController.updateExpenses);

module.exports = router;
