const express = require('express');
const viewController = require('../controllers/viewControllers');

const router = express.Router();
router.use(express.json());

router.get('/', viewController.getHome);
router
  .route('/our-company')
  .get(viewController.getOurCompany)
  .post(viewController.createTeam);

router
  .route('/our-services')
  .get(viewController.getServices)
  .post(viewController.createService);

router
  .route('/our-projects')
  .get(viewController.getProjects)
  .post(viewController.createProject);

router.route('/api/v1/join-us').post(viewController.createApplication);
router.route('/join-us').get(viewController.getJoinUs);

router.route('/contact-us').get(viewController.getContactUs);
router.route('/api/v1/contact-us').post(viewController.createMessage);
router.get('/login', viewController.getLoginForm);
router.get('/signup', viewController.getSignupForm);
module.exports = router;
