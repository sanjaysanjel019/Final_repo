const User = require('../models/User');

exports.displayUsers = async(req, res) => {
    const users = await User.find();
    res.json({
        msg: 'Success',
        data: {
            users
        }
    });
};

exports.addUser = async(req, res) => {
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.status(200).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
};

exports.login = async(req, res) => {
    const { username, password } = req.body;
    let err = '';
    if (!username || !password) {
        err = new Error(404, "Invalid username");
        console.log("err is==>", err)

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