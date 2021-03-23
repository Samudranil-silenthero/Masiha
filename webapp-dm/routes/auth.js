const { Router } = require('express');
const router = Router();

const { phone_signup } = require('../controllers/auth');

//SIGNUP
router.post('/signup', phone_signup);

module.exports = router;