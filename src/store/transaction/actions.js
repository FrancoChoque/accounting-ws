import Router from 'next/router';
import { toastr } from 'react-redux-toastr';
import { uiStartLoading, uiStopLoading } from '../ui/actions';
import { SET_TRANSACTIONS, SET_TRANSACTION } from '../actionTypes';
import {
  createTransactionService,
  getTransactionsService,
  getTransactionService,
} from '../../services/transactionService';
import { getUser } from '../auth/actions';

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const setTransaction = transaction => ({
  type: SET_TRANSACTION,
  transaction,
});

export const getTransactions = () => dispatch => {
  dispatch(uiStartLoading());
  getTransactionsService()
    .then(res => {
      dispatch(setTransactions(res));
      dispatch(uiStopLoading());
    })
    .catch(error => {
      dispatch(uiStopLoading());
      toastr.error('Error', error.message);
    });
};

export const getTransaction = refundId => dispatch => {
  dispatch(uiStartLoading());
  getTransactionService(refundId)
    .then(res => {
      dispatch(setTransaction(res));
      dispatch(uiStopLoading());
    })
    .catch(error => {
      dispatch(uiStopLoading());
      toastr.error('Error', error.message);
    });
};

export const createTransaction = transaction => dispatch => {
  dispatch(uiStartLoading());
  createTransactionService(transaction)
    .then(() => {
      dispatch(getUser());
      dispatch(getTransactions());
      dispatch(uiStopLoading());
      Router.push('/transactions');
    })
    .catch(error => {
      dispatch(uiStopLoading());
      toastr.error('Error', error.message);
    });
};
