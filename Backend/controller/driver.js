const Driver = require('../models/Driver');

exports.displayDrivers = async (req, res) => {
	const drivers = await Driver.find();
	res.json({
		msg: 'Success',
		data: {
			drivers
		}
	});
};

exports.addDriver = async (req, res) => {
	const newDriver = await Driver.create({
		id: req.body.id,
		name: req.body.name,
		vehicleNumber: req.body.vehicleNumber
	});
	res.status(200).json({
		status: 'success',
		data: {
			driver: newDriver
		}
	});
};
exports.updateDriver = async (req, res) => {
	console.log(req.params.id);
	const userToUpdate = await Driver.findOne({ id: req.body.id });
	const updatedUser = await Driver.findByIdAndUpdate(userToUpdate._id, req.body, { new: true });

	res.status(200).json({
		msg: 'Success',
		data: {
			updatedUser
		}
	});
};

exports.deleteDriver = async (req, res) => {
	const userToUpdate = await Driver.findOne({ id: req.body.id });
	const userId = userToUpdate._id;
	const userToDelete = await Driver.findByIdAndDelete(userId);
	res.status(200).json({
		msg: 'Successfully Deleted',
		data: {
			userToDelete
		}
	});
};
