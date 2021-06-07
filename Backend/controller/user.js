const User = require('../models/User');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/Error');
const { promisify } = require('util');

//signs a new JWT Token
const signToken = (id) => {
	console.log('ENV VAR ARE====>', process.env.JWT_SECRET_TOKEN);
	return jwt.sign({ id }, process.env.JWT_SECRET_TOKEN, {
		expiresIn: process.env.JWT_EXPIRES_IN
	});
};

const createAndSendToken = (user, statusCode, req, res) => {
	const token = signToken(user._id);
	res.cookie('jwt', token, {
		expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000)
	});
	console.log('Cookies is set Horray 🤷‍♀️👏==>', res.cookies);
	user.password = undefined;
	res.status(statusCode).json({
		status: 'success',
		token,
		statusCode,
		data: {
			user
		}
	});
};

exports.getCurrentUser = async (req, res) => {
	const userName = req.body.username;
	const user = await User.findOne({ username: userName });

	res.json({
		msg: 'Success',
		data: {
			user
		}
	});
};

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

	createAndSendToken(newUser, 201, req, res);
};

exports.findDrivers = async (req, res) => {
	const users = await User.find();
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
	console.log('Found user YAHOOOO===>', userToUpdate);
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

exports.login = async (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return next(new AppError('Please provide email and password', 400));
	}
	const user = await User.findOne({ username }).select('+password');

	if (!user || !await user.checkEncPass(password, user.password)) {
		return next(new AppError('Incorrect email or password', 401));
	}
	createAndSendToken(user, 200, req, res);
};

// exports.login = async (req, res) => {
// 	const { username, password } = req.body;
// 	let err = '';
// 	if (!username || !password) {
// 		err = new Error(404, 'Invalid username');
// 		console.log('err is==>', err);

// 		let errcd = 400;
// 	}
// 	console.log('Provided username and pssword is===>', username, password);

// 	const user = await User.findOne({ username }).select('+password');
// 	if (user !== null) {
// 		errcd = 200;
// 	}

// 	if (!user || !await user.checkEncPass(password, user.password)) {
// 		console.log('Username or password do not match');
// 		errcd = 400;
// 	}

// 	res.status(200).json({
// 		msg: 'success',
// 		user,
// 		errcd
// 	});
// };

//Protected lets you check user by Token
exports.protect = async (req, res, next) => {
	let token;
	console.log('Cookies are=>', req.cookies);
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	if (!token) {
		return next(new AppError('You are not logged in! Please log in to get access.', 401));
	}
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_TOKEN);

	const currentUser = await User.findById(decoded.id);
	if (!currentUser) {
		return next(new AppError('The user belonging to this token does no longer exist.', 401));
	}

	req.user = currentUser;
	// res.locals.user = currentUser;
	console.log('The logged in User is ===>', req.user);
	next();
};

//Checks if the user is currently loggedIn
exports.isLoggedIn = async (req, res, next) => {
	if (req.cookies.jwt) {
		try {
			const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET_TOKEN);

			const currentUser = await User.findById(decoded.id);
			if (!currentUser) {
				return next();
			}

			res.locals.user = currentUser;
			return next();
		} catch (err) {
			return next();
		}
	}
	next();
};

//For restricted access
exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(new AppError('You do not have permission to perform this action', 403));
		}

		next();
	};
};
