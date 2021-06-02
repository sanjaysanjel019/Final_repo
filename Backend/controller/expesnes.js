const Expenses = require('../models/Expenses');

exports.getExpenses = async (req, res) => {
	const allExpenses = await Expenses.find();
	console.log(allExpenses);
	res.json({
		message: 'Success',
		data: allExpenses
	});
};

exports.updateExpenses = async (req, res) => {
	const filter = { _id: '60b7141cb30dac424cb63bb0' };
	let updatedData = await Expenses.updateOne(filter, {
		todayExpenses: req.body.todayExpenses,
		monthlyExpenses: req.body.monthlyExpenses,
		yearlyExpenses: req.body.yearlyExpenses
	});
	let doc = await Expenses.findOne({ _id: '60b7141cb30dac424cb63bb0' });
	console.log('ACK===>', updatedData);
	res.json({
		message: 'success',
		data: {
			doc
		}
	});
};

exports.addExpenses = async (req, res) => {
	const newExp = await Expenses.create({
		todayExpenses: req.body.todayExpenses,
		monthlyExpenses: req.body.monthlyExpenses,
		yearlyExpenses: req.body.yearlyExpenses
	});
	res.status(200).json({
		message: 'Success',
		expData: {
			newExp
		}
	});
};
