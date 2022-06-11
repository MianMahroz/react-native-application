import {
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  AUTHENTICATE_USER,
} from '../actions/LoginAction';

const initialState = {
  isLoggedIn: false,
  user: {},
};
export const LoginReducer = (state = initialState, action) => {
  //   console.log('Action type', action.type);
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {...state, isLoggedIn: false};

    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.data.userDefinition ? 'true' : false,
        user: action.payload.data.data.userDefinition,
      };

    case AUTHENTICATE_FAIL:
      console.log('HTTP FAIL REQUEST', action);
      return {...state, isLoggedIn: false};

    default:
      return state;
  }
};
