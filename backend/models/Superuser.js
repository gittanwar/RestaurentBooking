// models/Superuser.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const superuserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
});

// Pre-save hook to hash the password
superuserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Superuser', superuserSchema);
