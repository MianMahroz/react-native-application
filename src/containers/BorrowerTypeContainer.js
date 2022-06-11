import React from 'react';
import {connect} from 'react-redux';
import BorrowerTypeComponent from '../components/BorrowerTypeComponent';
import ChangeBorrowerType from '../actions/BorrowerTypeActions';

const mapDispatchToProps = dispatch => {
  return {
    changeBorrower: borrowerType => dispatch(ChangeBorrowerType(borrowerType)),
  };
};

const mapStateToProps = state => {
  return {
    BorrowerType: state.BorrowerTypeReducer.BorrowerType,
  };
};
const BorrowerTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BorrowerTypeComponent);

export default BorrowerTypeContainer;
