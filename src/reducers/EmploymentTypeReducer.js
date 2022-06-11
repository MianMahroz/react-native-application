import {SAVE_EMPLOYMENT_TYPE} from '../actions/EmploymentTypeActions';

const initialState = {
  EmploymentType: '',
};

const EmploymentTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMPLOYMENT_TYPE:
      return {...state, EmployeeType: action.payload};
    default:
      return state;
  }
};

export default EmploymentTypeReducer;
