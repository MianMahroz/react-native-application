import React from 'react';
import {connect} from 'react-redux';
import BorrowerTypeComponent from '../components/BorrowerTypeComponent';
import ChangeBorrowerType from '../actions/BorrowerTypeActions';
import EmploymentTypeComponent from '../components/EmploymentTypeComponent';
import SaveEmploymentType from '../actions/EmploymentTypeActions';

const mapDispatchToProps = dispatch => {
  return {
    saveEmploymentType: employmentType =>
      dispatch(SaveEmploymentType(employmentType)),
  };
};

const mapStateToProps = state => {
  return {
    EmploymentType: state.EmploymentTypeReducer.BorrowerType,
  };
};
const EmploymentTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmploymentTypeComponent);

export default EmploymentTypeContainer;
