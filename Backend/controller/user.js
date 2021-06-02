const User = require('../models/User');

exports.displayUsers = async (req, res) => {
	const users = await User.find();
	res.json({
		msg: 'Success',
		data: {
			users
		}
	});
};

exports.addUser = async (req, res) => {
	const newUser = await User.create({
		username: req.body.username,
		password: req.body.password,
		id: req.body.id,
		name: req.body.name,
		vehicleNumber: req.body.vehicleNumber,
		role: req.body.role
	});
	res.status(200).json({
		status: 'success',
		data: {
			user: newUser
		}
	});
};

exports.findDrivers = async (req, res) => {
	const users = await User.find();
	// console.log('Langtey==>', users);
	const driversOnly = users.filter((user) => user.role === 'driver');
	res.status(200).json({
		message: 'Success',
		data: {
			driversOnly
		}
	});
};

exports.updateUser = async (req, res) => {
	const userToUpdate = await User.findOne({ id: req.body.id });
	const updatedUser = await User.findByIdAndUpdate(userToUpdate._id, req.body, { new: true });

	res.status(200).json({
		msg: 'Success',
		data: {
			updatedUser
		}
	});
};

exports.deleteUser = async (req, res) => {
	const userToUpdate = await User.findOne({ id: req.body.id });
	const userId = userToUpdate._id;
	const userToDelete = await User.findByIdAndDelete(userId);
	res.status(200).json({
		msg: 'Successfully Deleted',
		data: {
			userToDelete
		}
	});
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	let err = '';
	if (!username || !password) {
		err = new Error(404, 'Invalid username');
		console.log('err is==>', err);

		let errcd = 400;
	}
	console.log('Provided username and pssword is===>', username, password);

	const user = await User.findOne({ username }).select('+password');
	if (user !== null) {
		errcd = 200;
	}

	if (!user || !await user.checkEncPass(password, user.password)) {
		console.log('Username or password do not match');
		errcd = 400;
	}

	res.status(200).json({
		msg: 'success',
		user,
		errcd
	});
};

exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		console.log(req.user.role);
		// if (!roles.includes(req.user.role)) {
		// return next(new Error('Permission Denied', 403));
	};
	next();
};
// };
