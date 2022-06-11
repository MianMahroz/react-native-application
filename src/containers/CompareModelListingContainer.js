import {connect} from 'react-redux';
import {UpdateCompareModelList_ToSectionList} from '../actions/FilterAction';
import CompareModelListingComponent from '../components/CompareModelListing';
import {
  DisplayFinancialChart,
  ToggleFinancialChartModel,
  ChangeFinancialChart,
  GetFinancialDetail,
  SelectModel,
} from '../actions/CompareModelListActions';

const mapDispatchToProps = dispatch => {
  return {
    convertCompareModelList_ToSectionList: formData =>
      dispatch(UpdateCompareModelList_ToSectionList(formData)),
    displayChart: data => dispatch(DisplayFinancialChart(data)),
    toggleFinancialChartModel: data =>
      dispatch(ToggleFinancialChartModel(data)),
    changeFinancialChart: data => dispatch(ChangeFinancialChart(data)),
    getFinancialDetails: data => dispatch(GetFinancialDetail(data)),
    saveSelectedModel: data => dispatch(SelectModel(data)),
  };
};

const mapStateToProps = state => {
  return {
    compareModelList: state.FilterModelReducer.compareModelList,
    compareModelSectionList:
      state.FilterModelReducer.updatedCompareModelSectionList,
    chartObj: state.CompareModelListReducer.chartObj,
    isModalVisible: state.CompareModelListReducer.isModalVisible,
  };
};
const CompareModelListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompareModelListingComponent);

export default CompareModelListingContainer;
