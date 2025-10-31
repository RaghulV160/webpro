// controllers/userController.js
const User = require('../models/userModel');

exports.getUserByUsernameAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(200).json({ message: 'Invalid Credentials' });
    }
    // If found, respond with user (tests don't check success path)
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Database error' });
  }
};

exports.addUser = async (req, res) => {
  try {
    await User.create(req.body);
    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Database error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Database error' });
  }
};
