const expressLoader = require('./express');
const sessionLoader = require('./session');

module.exports = async ({ expressApp }) => {
  sessionLoader({ app: expressApp });
  expressLoader({ app: expressApp });
};
