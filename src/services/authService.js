import axios from '../lib/axios';

export const loginService = user =>
  new Promise((resolve, reject) => {
    axios
      .post('/api/auth/login', { user })
      .then(res => {
        resolve(res.data.session);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          reject(new Error(err.response.data.message));
        } else {
          reject(new Error('Error inesperado'));
        }
      });
  });

export const getUserService = () =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/auth')
      .then(res => {
        resolve(res.data.user);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          reject(new Error(err.response.data.message));
        } else {
          reject(new Error('Error inesperado'));
        }
      });
  });

export const logoutService = () =>
  new Promise((resolve, reject) => {
    axios
      .post('/api/auth/logout')
      .then(() => {
        resolve();
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          reject(new Error(err.response.data.message));
        } else {
          reject(new Error('Error inesperado'));
        }
      });
  });
