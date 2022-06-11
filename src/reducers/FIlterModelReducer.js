import {
  FILTER_MODEL_LIST,
  FILTER_MODEL_LIST_SUCCESS,
  FILTER_MODEL_LIST_FAILURE,
  ADD_TO_COMPARE_LIST,
  UPDATE_COMPARE_MODEL_LIST_TO_SECTION_LIST,
} from '../actions/FilterAction';
import {AssetModel} from '../core/applicationDto';

const initialState = {
  modelList: [AssetModel],
  compareModelList: [],
  updatedCompareModelSectionList: [],
};
export const FilterModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MODEL_LIST:
      return {...state, modelList: action.payload.data};
    case FILTER_MODEL_LIST_SUCCESS:
      return {...state, modelList: action.payload.data};
    case ADD_TO_COMPARE_LIST:
      // console.log('ADD_TO_COMPARE_LIST CALLED', action.payload);
      return {
        ...state,
        compareModelList:
          state.compareModelList.filter(
            s =>
              s.modelIdPk === action.payload.modelIdPk &&
              s.assetTypeId === action.payload.assetTypeId,
          ).length > 0
            ? state.compareModelList.filter(
                m =>
                  m.modelIdPk !== action.payload.modelIdPk &&
                  m.assetTypeId !== action.payload.assetTypeId,
              )
            : [...state.compareModelList, action.payload],
      };
    case UPDATE_COMPARE_MODEL_LIST_TO_SECTION_LIST:
      return {...state, updatedCompareModelSectionList: action.payload};

    default:
      return state;
  }
};
