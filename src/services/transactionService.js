import axios from '../lib/axios';

export const getTransactionsService = () =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/transactions', {})
      .then(res => {
        if (res.data) {
          resolve(res.data.transactions);
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

export const getTransactionService = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`/api/transactions/${id}`)
      .then(res => {
        if (res.data) {
          resolve(res.data.transaction);
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

export const createTransactionService = transaction =>
  new Promise((resolve, reject) => {
    axios
      .post('/api/transactions', { transaction })
      .then(res => {
        if (res.data) {
          resolve(res.data.transaction);
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
