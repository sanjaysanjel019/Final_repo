const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username is required']
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: 4,
		select: false
	},
	id: {
		type: String
	},
	name: {
		type: String,
		required: [true, 'Driver Name is required']
	},
	vehicleNumber: {
		type: String
	},
	role: {
		type: String,
		enum: ['employee', 'manager', 'driver'],
		default: 'driver'
	}
});

userSchema.pre('save', function(next) {
	const user = this;
	bcrypt.hash(user.password, 12, function(error, hashedPassword) {
		if (error) {
			console.log('Password could not be hashed');
		}
		user.password = hashedPassword;
		next();
	});
});

userSchema.methods.checkEncPass = async function(canPass, userPassword) {
	return await bcrypt.compare(canPass, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
