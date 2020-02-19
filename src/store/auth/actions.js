import Router from 'next/router';
import { LOGIN_USER, LOGOUT_USER } from '../actionTypes';
import { uiStartLoading, uiStopLoading } from '../ui/actions';
import { logoutService, loginService, getUserService } from '../../services/authService';

export const setUser = user => ({
  type: LOGIN_USER,
  user,
});

export const logoutUser = user => ({
  type: LOGOUT_USER,
  user,
});

export const login = user => dispatch => {
  dispatch(uiStartLoading());
  loginService(user)
    .then(res => {
      dispatch(setUser(res.user));
      dispatch(uiStopLoading());
      Router.push('/');
    })
    .catch(() => {
      dispatch(uiStopLoading());
    });
};

export const getUser = () => dispatch => {
  dispatch(uiStartLoading());
  getUserService()
    .then(res => {
      dispatch(setUser(res));
      dispatch(uiStopLoading());
      Router.push('/');
    })
    .catch(() => {
      dispatch(uiStopLoading());
    });
};

export const logout = () => dispatch => {
  dispatch(uiStartLoading());
  logoutService()
    .then(() => {
      dispatch(logoutUser());
      dispatch(uiStopLoading());
      Router.push('/');
    })
    .catch(() => {
      dispatch(uiStopLoading());
    });
};
