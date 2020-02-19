/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastrReducer } from 'react-redux-toastr';
import sessionStorage from 'redux-persist/lib/storage/session';
import uiReducer from './ui/reducer';
import transactionReducer from './transaction/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  toastr: toastrReducer,
  transactions: transactionReducer,
  auth: authReducer,
});

const initialize = (reducer, initialState) =>
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

const initializeStore = (initialState, { req, debug, storeKey }) => {
  if (req) {
    return initialize(rootReducer, initialState);
  }
  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth', 'transactions'],
    storage: sessionStorage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = initialize(persistedReducer, initialState);
  store.__persistor = persistStore(store); // Nasty hack
  return store;
};

export default initializeStore;
