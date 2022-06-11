import React from 'react';
import {connect} from 'react-redux';
import AddToCompareList, {FilterModelList} from '../actions/FilterAction';
import ModelListComponent from '../components/ModelListComponent';

const mapDispatchToProps = dispatch => {
  return {
    filterModel: formData => dispatch(FilterModelList(formData)),
    addToCompareList: model => dispatch(AddToCompareList(model)),
  };
};

const mapStateToProps = state => {
  // console.log('State Change', state.FilterModelReducer.compareModelList);
  return {
    modelList: state.FilterModelReducer.modelList,
    compareModelList: state.FilterModelReducer.compareModelList,
  };
};
const ModelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModelListComponent);

export default ModelListContainer;
