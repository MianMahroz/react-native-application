import {BORROWER_TYPE_SAVE} from '../reducers/BorrowerTypeReducer';

const ChangeBorrowerType = data => {
  return {
    type: BORROWER_TYPE_SAVE,
    payload: data,
  };
};

export default ChangeBorrowerType;
