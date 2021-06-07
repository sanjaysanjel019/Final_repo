const AppError = require('./../utils/Error');
const handleJWTError = () => new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () => new AppError('Your token has expired! Please log in again.', 401);

const sendErrorProd = (err, req, res) => {
	console.error('ERROR 💥', err);
	// 2) Send generic message
	return res.json({
		title: 'Something went wrong!',
		err
	});
};

module.exports = (err, req, res, next) => {
	// console.log(err.stack);
	console.log('What a win');
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	let error = { ...err };
	error.message = err.message;

	if (error.name === 'JsonWebTokenError') error = handleJWTError();
	if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

	sendErrorProd(error, req, res);
};
