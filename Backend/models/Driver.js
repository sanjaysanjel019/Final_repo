const mongoose = require('mongoose');
const driverSchema = new mongoose.Schema({
	id: {
		type: String
	},
	name: {
		type: String,
		required: [true, 'Driver Name is required']
	},
	vehicleNumber: {
		type: String,
		required: [true, 'Password is required']
	}
});

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;
