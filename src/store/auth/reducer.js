import {
  LOGOUT_USER, LOGIN_USER,
} from '../actionTypes';

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        user: { ...action.user },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
