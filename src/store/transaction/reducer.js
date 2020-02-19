import { SET_TRANSACTIONS, SET_TRANSACTION } from '../actionTypes';

const initialState = {
  transactions: [],
  transaction: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS: {
      return {
        ...state,
        transactions: [...action.transactions],
      };
    }
    case SET_TRANSACTION: {
      return {
        ...state,
        transaction: { ...action.transaction },
      };
    }
    default:
      return state;
  }
};

export default reducer;
