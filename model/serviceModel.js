const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceTitle: {
    type: String,
    required: [true, 'A service must have a title!'],
    unique: true,
  },
  photo: {
    type: String,
    required: [true, 'A service must have a photo.'],
  },
  serviceInfo: Object.fromEntries(
    ['line1', 'line2', 'line3', 'line4'].map((link) => [
      link,
      { type: String, default: '' },
    ])
    // Result array: [  ['line1' , {type: String, default: ''}] , ['line2', {type String, default: ''}], etc]
  ),
});

const serviceModel = mongoose.model('Service', serviceSchema);
module.exports = serviceModel;
