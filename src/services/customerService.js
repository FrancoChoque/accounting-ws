import axios from '../lib/axios';

export const getCustomerService = params =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/customer', {
        params: { ...params },
      })
      .then(res => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(new Error('Error inesperado'));
        }
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          reject(new Error(err.response.data.message));
        } else {
          reject(new Error('Error inesperado'));
        }
      });
  });
