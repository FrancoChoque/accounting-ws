module.exports = {
  port: parseInt(process.env.PORT, 10) || 8080,
  api: {
    prefix: '/api',
  },
};