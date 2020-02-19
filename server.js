/* eslint-disable camelcase */
const dotenv = require('dotenv');
const next = require('next');
const express = require('express');
const config = require('./api/config');
const loaders = require('./api/loaders');

const envFound = dotenv.config();

if (!envFound || envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const app = next({
  dev: !!process.env.NEXT_DEV,
});
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  loaders({ expressApp: server });

  server.get('*', (req, res) => {
    handle(req, res, req.url);
  });

  server.listen(config.port, err => {
    if (err) {
      throw err;
    }
    console.log('\x1b[36m%s\x1b[0m', `> Ready on http://localhost:${config.port}`);
  });
});
