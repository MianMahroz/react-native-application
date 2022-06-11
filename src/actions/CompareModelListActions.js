export const DISPLAY_FINANCIAL_Chart = 'DISPLAY_FINANCIAL_Chart';
export const TOGGLE_FINANCIAL_CHART_MODEL = 'TOGGLE_FINANCIAL_CHART_MODEL';
export const CHANGE_FINANCIAL_CHART = 'CHANGE_FINANCIAL_CHART';
export const GET_FINANCIAL_DETAILS = 'GET_FINANCIAL_DETAILS';
export const GET_FINANCIAL_DETAILS_SUCCESS = 'GET_FINANCIAL_DETAILS_SUCCESS';
export const SELECT_MODEL = 'SELECT_MODEL';

export const DisplayFinancialChart = model => {
  return {
    type: DISPLAY_FINANCIAL_Chart,
    payload: model,
  };
};

export const ToggleFinancialChartModel = model => {
  return {
    type: TOGGLE_FINANCIAL_CHART_MODEL,
    payload: model,
  };
};

export const ChangeFinancialChart = model => {
  return {
    type: CHANGE_FINANCIAL_CHART,
    payload: model,
  };
};

export function GetFinancialDetail(formData) {
  return {
    types: [GET_FINANCIAL_DETAILS, GET_FINANCIAL_DETAILS_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getAssetModelFinancialDetail',
        data: formData,
      },
    },
  };
}

export const SelectModel = model => {
  return {
    type: SELECT_MODEL,
    payload: model,
  };
};
