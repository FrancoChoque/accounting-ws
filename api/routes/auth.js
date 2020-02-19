const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/email', authController.email);

router.post('/token', authController.token);

router.get('/', authController.index);

router.post('/login', authController.store);

router.post('/logout', authController.destroy);

module.exports = router;
