const mongoose = require('mongoose');
const validator = require('validator');
const contactSchema = new mongoose.Schema({
  Name: String,
  email: {
    type: String,
    validate: [validator.isEmail, 'Please enter a valid email address.'],
  },
  phone: Number,
  message: String,
});

const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;
