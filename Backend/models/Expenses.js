const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
	todayExpenses: {
		type: Number
	},
	monthlyExpenses: {
		type: Number
	},
	yearlyExpenses: {
		type: Number
	}
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
