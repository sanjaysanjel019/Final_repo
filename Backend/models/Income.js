const mongoose = require('mongoose');
const incomeSchema = new mongoose.Schema({
	todayIncome: {
		type: Number
	},
	totalIncome: {
		type: Number
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: [true, 'An income must belong to user']
	}
});

incomeSchema.pre(/^find/, function(next) {
	this.populate({
		path: 'user'
	});
	next();
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;
