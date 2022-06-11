import {
  DISPLAY_FINANCIAL_Chart,
  TOGGLE_FINANCIAL_CHART_MODEL,
  GET_FINANCIAL_DETAILS_SUCCESS,
  SELECT_MODEL,
} from '../actions/CompareModelListActions';
import { AssetModel } from '../core/applicationDto';

const initialState = {
  chartObj: '',
  selectedModel: AssetModel,
};

const CompareModelListReducer = (state = initialState, action) => {
  // console.log('action type', action.type);
  switch (action.type) {
    case DISPLAY_FINANCIAL_Chart:
      return {...state, chartObj: action.payload};
    case TOGGLE_FINANCIAL_CHART_MODEL:
      return {...state, isModalVisible: action.payload};
    case GET_FINANCIAL_DETAILS_SUCCESS:
      var obj = action.payload.data;
      var newChartObj = {
        // downPaymentPct:
        //   Math.round(obj.data.depositAmount / state.chartObj.listPrice) * 100,
        // financeAmountPct:
        //   Math.round(obj.data.financialAmount / state.chartObj.listPrice) * 100,
        downPaymentPct: state.chartObj.downPaymentPct,
        financeAmountPct: state.chartObj.financeAmountPct,
        downPayment: state.chartObj.downPayment,
        financeAmount: state.chartObj.financeAmount,
        terms: obj.data.terms,
        modelName: state.chartObj.modelName,
        makeName: state.chartObj.makeName,
        assetTypeId: state.chartObj.assetTypeId,
        modelId: state.chartObj.modelId,
        makeId: state.chartObj.makeId,
        rentalAmount: obj.data.rentalAmount,
        listPrice: state.chartObj.listPrice,
      };
      return {
        ...state,
        chartObj: newChartObj,
      };
    case SELECT_MODEL:
      return {...state, selectedModel: action.payload};

    default:
      return state;
  }
};

export default CompareModelListReducer;
