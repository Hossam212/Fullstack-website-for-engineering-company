const Team = require('../model/teamModel');
const Service = require('../model/serviceModel');
const Application = require('../model/applicationsModel');
const Project = require('../model/projectModel');
const Contact = require('../model/contactModel');
const catchAsync = require('../utils/catchAsync');
exports.getHome = (req, res, next) => {
  res.status(200).render('home', {
    title: 'Home',
  });
};
exports.createTeam = catchAsync(async (req, res, next) => {
  const newTeam = await Team.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newTeam,
    },
  });
});
exports.getOurCompany = catchAsync(async (req, res, next) => {
  const teamMembers = await Team.find();
  res.status(200).render('ourCompany', {
    title: 'Our Company',
    teamMembers,
  });
});

exports.createService = catchAsync(async (req, res, next) => {
  const newService = await Service.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newService: newService,
    },
  });
});
exports.getServices = catchAsync(async (req, res, next) => {
  const services = await Service.find();

  res.status(200).render('services', {
    title: 'Our Services',
    services,
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newProject,
    },
  });
});
exports.getProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).render('projects', {
    title: 'Our Projects',
    projects,
  });
});
exports.getJoinUs = catchAsync(async (req, res, next) => {
  res.status(200).render('joinUs', {
    title: 'Join Us',
  });
});
exports.createApplication = catchAsync(async (req, res, next) => {
  const newApplication = await Application.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newApplication,
    },
  });
});
exports.getContactUs = catchAsync(async (req, res, next) => {
  res.status(200).render('contactUs', {
    title: 'Contact Us',
  });
});
exports.createMessage = catchAsync(async (req, res, next) => {
  const newMessage = await Contact.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newMessage,
    },
  });
});
exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login',
  });
});

exports.getSignupForm = catchAsync(async (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Sign Up',
  });
});
