// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  password: { type: String, required: true, minlength: 6, maxlength: 255 },
});

module.exports = mongoose.model('User', userSchema);
