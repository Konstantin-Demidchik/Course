const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../utils/DataBaseUtils');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function(next) {
	if (!this.isModified('password')) {
		return next();
	};

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(this.password, salt);
	this.password = hash;
	next();
});

UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
