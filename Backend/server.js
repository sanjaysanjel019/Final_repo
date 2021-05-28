const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
	path: './config.env'
});

mongoose
	.connect('mongodb://localhost:27017/david', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('Connected to Database sucessfully'))
	.catch((err) => console.log(`Error : ${err.message}`));

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Listening to port 3000');
});
