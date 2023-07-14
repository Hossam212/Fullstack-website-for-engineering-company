const express = require('express');
const authController = require('../controllers/authControllers');

const router = express.Router();
router.use(express.json());

router.route('/login').post(authController.login);
router.route('/signup').post(authController.signup);
module.exports = router;
