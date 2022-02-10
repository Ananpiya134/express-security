const bcrypt = require('bcryptjs');
const { User } = require('../models')

exports.register = async (req, res, next) => {


    try {
        const { username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'password and confirm password are not matching' });
        }

        const user = User.build({ username, email });
        console.log(JSON.stringify(user));

        const existUsername = await User.findOne({ where: { username } });
        if (existUsername) {
            return res.status(400).json({ message: 'this username is existed try another username' });
        }

        const existEmail = await User.findOne({ where: { email } });
        if (existEmail) {
            return res.status(400).json({ message: 'this email is in used please try another' });
        }

        const hashed = await bcrypt.hash(password, 12);
        await User.create({ username, email, password: hashed });
        res.json({ message: 'user is created', username, email });


    } catch (err) {
        next(err)
    }
}


exports.login = async (req, res, next) => {
    try {


        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username },
            attribute: ['password']
        })

        if (!user) {
            return res.status(400).json({ message: 'username or password is incorrect' })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'username or password is incorrect' })
        }

        res.json({ message: "login success" });


    } catch (err) {
        next(err)
    }
}