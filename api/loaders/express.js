const bodyParser = require('body-parser');
const routes = require('../routes');

module.exports = ({ app }) => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  routes(app);
  console.log('✌️ Express loaded');
};
