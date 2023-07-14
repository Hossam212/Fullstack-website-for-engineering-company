const mongoose = require('mongoose');
const validator = require('validator');
const appsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address.'],
  },
  phone: Number,
  exp: Number,
  diploma: String,
  message: String,
});

const appModel = mongoose.model('Application', appsSchema);
module.exports = appModel;
