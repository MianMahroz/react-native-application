export const FILTER_MODEL_LIST = 'FILTER_MODEL_LIST';
export const FILTER_MODEL_LIST_SUCCESS = 'FILTER_MODEL_LIST_SUCCESS';
export const FILTER_MODEL_LIST_FAILURE = 'FILTER_MODEL_LIST_FAILURE';
export const ADD_TO_COMPARE_LIST = 'ADD_TO_COMPARE_LIST';
export const UPDATE_COMPARE_MODEL_LIST_TO_SECTION_LIST =
  'UPDATE_COMPARE_MODEL_LIST_TO_SECTION_LIST';

export function FilterModelList(formData) {
  return {
    types: [FILTER_MODEL_LIST, FILTER_MODEL_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/filter',
        data: formData,
      },
    },
  };
}

const AddToCompareList = model => {
  return {
    type: ADD_TO_COMPARE_LIST,
    payload: model,
  };
};

export function UpdateCompareModelList_ToSectionList(payload) {
  return {
    type: UPDATE_COMPARE_MODEL_LIST_TO_SECTION_LIST,
    payload: payload,
  };
}

export default AddToCompareList;
