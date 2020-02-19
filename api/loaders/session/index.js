const session = require('express-session');

module.exports = ({ app }) => {
  try {
    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
      }),
    );
    console.log('✌️ Session loaded');
  } catch (error) {
    console.log(error);
  }
};
