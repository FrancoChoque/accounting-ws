const router = require('express').Router();

const auth = require('./auth');
const transactions = require('./transactions');

const config = require('../config');

module.exports = app => {
  router.use('/auth', auth);
  router.use('/transactions', transactions);
  app.use(config.api.prefix, router);
  return app;
};
