const router = require('express').Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.index);

router.get('/:id', transactionController.show);

router.post('/', transactionController.store);

module.exports = router;
