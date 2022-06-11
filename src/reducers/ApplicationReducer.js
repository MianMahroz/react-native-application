import {
  SAVE_APPLICATION_SUCCESS,
  SAVE_APPLICATION_ERROR,
  GET_APPLICATION_BY_USER_ID,
  GET_APPLICATION_BY_USER_ID_SUCCESS,
} from '../actions/ApplicationActions';
import {QueueDataDto} from '../core/applicationDto';
import {processQueue} from '../core/common';

const initialState = {
  application: '',
  workQueue: {},
};

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_APPLICATION_SUCCESS:
      console.log('application response SUCCESS', action.payload.data);
      return {...state, application: action.payload};
    case SAVE_APPLICATION_ERROR:
      console.log('ERROR', action.payload);
      return {...state};
    case GET_APPLICATION_BY_USER_ID:
      console.log('get application by user id called');
      return {...state};
    case GET_APPLICATION_BY_USER_ID_SUCCESS:
      // console.log('response11111', action.payload.data.data.application);
      return {
        ...state,
        workQueue: processQueue(action.payload.data.data.application),
      };

    default:
      return state;
  }
};

export default ApplicationReducer;
