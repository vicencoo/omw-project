/** @type {import('sequelize').ModelStatic<any>} */
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const normalizedUsername = username
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();

    // const user = await User.findOne({ username: normalizedUsername });
    const user = await User.findOne({
      where: { username: normalizedUsername },
    });

    if (!user) {
      return res.status(400).json({ message: 'Credentials not correct.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Credentials not correct.' });
    }

    const token = jwt.sign(
      { userId: user.id, username: normalizedUsername },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
    // user.token = token;

    res.json({ message: 'Logged in successfully.', token });
  } catch (err) {
    console.error(err);
  }
};

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const normalizedUsername = username
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(req.body);

    await User.create({
      username: normalizedUsername,
      password: hashedPassword,
    });

    res.json({ message: 'User Created!' });
  } catch (err) {
    console.error('Error adding user', err);
  }
};
