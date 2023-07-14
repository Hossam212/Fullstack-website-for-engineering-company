const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: [true, 'A project must have a title!'],
  },
  projectDate: String,
  dataTarget: String,
  coverImage: String,
  projectImages: [String],
  projectInfo: Object.fromEntries(
    ['line1', 'line2', 'line3'].map((line) => [
      line,
      { type: String, default: '' },
    ])
    // Result array: [  ['line1' , {type: String, default: ''}] , ['line2', {type String, default: ''}], etc]
  ),
});

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;
