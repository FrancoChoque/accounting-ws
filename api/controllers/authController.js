const axios = require('axios');

exports.index = (req, res) => {
  if (req.session.user) {
    res.status(200).json({ user: req.session.user });
    return;
  }
  res.status(403).json({ message: 'Sesión expirada' });
};

exports.store = (req, res) => {
  const { user } = req.body;
  req.session.user = { ...user };
  req.session.transactions = [];
  res.status(200).json({ session: req.session });
};

exports.token = (req, res) => {
  const { token } = req.body;
  axios
    .get(`${process.env.API_URL}/users`, {
      params: {
        api_token: token,
      },
    })
    .then(resp => {
      req.session.user = { ...resp.data.users[0] };
      const user = {
        name: req.session.user.name,
      };
      res.status(200).json({ user });
    })
    .catch(error => {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        res.json(error.request);
      } else {
        res.json(error.message);
      }
    });
};

exports.email = (req, res) => {
  const { data } = req.body;
  axios({
    headers: {
      contentType: 'application/x-www-form-urlencoded',
    },
    url: `${process.env.API_URL}/api/email`,
    method: 'post',
    data,
  })
    .then(resp => {
      req.session.user = { ...resp.data.user };
      const user = {
        name: resp.data.user.name,
      };
      res.status(200).json({ user });
    })
    .catch(error => {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        res.json(error.request);
      } else {
        res.json(error.message);
      }
    });
};

exports.destroy = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({});
  });
};
