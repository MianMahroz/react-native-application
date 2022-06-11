export const BORROWER_TYPE_SAVE = 'BORROWER_TYPE_SAVE';

const initialState = {
  BorrowerType: '',
};

const BorrowerTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BORROWER_TYPE_SAVE:
      return {...state, BorrowerType: action.payload};

    default:
      return state;
  }
};

export default BorrowerTypeReducer;
