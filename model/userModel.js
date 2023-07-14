const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name!'],
    unique: [true, 'Name is already taken. Please try another one'],
  },
  role: {
    type: String,
    required: [true, 'A user must have a role'],
    enum: {
      values: ['user', 'admin'],
      message: 'User role is either user or admin',
    },
    default: 'user',
  },
  email: {
    type: String,
    required: [true, 'Please enter your email.'],
    unique: [true, 'Email already used.'],
    validate: [validator.isEmail, 'Please enter a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password!'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function () {
        return this.confirmPassword == this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  phone: {
    type: Number,
    required: [true, 'Please enter your phone number'],
    minlength: 11,
  },
  passwordResetToken: String,
  changedPasswordAt: Date,
  passwordTokenExpires: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.changedPasswordAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = (tokentime) => {
  if (this.changedPasswordAt) {
    const timestamp = parseInt(this.changedPasswordAt.getTime() / 1000, 10);
    return tokentime < timestamp;
  }
  return false;
};
userSchema.methods.createPassResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  const encryptedToken = crypto
    .createHash('sha258')
    .update(token)
    .digest('hex');
  this.passwordResetToken = encryptedToken;
  this.passwordTokenExpires = Date.now() + 10 * 60 * 1000;
  return token;
};
module.exports = mongoose.model('User', userSchema);
