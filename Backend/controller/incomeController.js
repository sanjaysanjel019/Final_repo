const Income = require('../models/Income');

exports.getIncome = async (req, res) => {
	const allIncome = await Income.find();
	console.log(allIncome);
	res.json({
		message: 'Success',
		data: allIncome
	});
};

exports.addIncome = async (req, res) => {
	const newIncome = await Income.create({
		todayIncome: req.body.todayIncome,
		totalIncome: req.body.totalIncome,
		user: req.body.user
	});
	res.status(200).json({
		message: 'Success',
		expData: {
			newIncome
		}
	});
};
