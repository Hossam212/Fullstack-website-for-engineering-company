const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A team member must have a name!'],
  },
  photo: {
    type: String,
    required: [true, 'A team memeber must have a photo.'],
  },
  position: {
    type: String,
    required: [
      true,
      'Please specify the position of the team member in the company.',
    ],
  },
  socialLinks: Object.fromEntries(
    ['fb', 'twitter', 'linkedIn', 'instagram'].map((link) => [
      link,
      { type: String, default: '#' },
    ])
    // Result array: [  ['fb' , {type: String, default: '#'}] , ['twitter', {type String, default: '#'}], etc]
  ),
});

const teamModel = mongoose.model('Team', teamSchema);

module.exports = teamModel;
