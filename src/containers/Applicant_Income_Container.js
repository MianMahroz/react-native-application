import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';

import Applicant_Income_Component from '../components/Applicant_Income_Component';
const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
  };
};

const mapStateToProps = state => {
  // console.log('industryList', state.SetupsReducer.industryList);
  return {
    applicants: state.ApplicantReducer.applicants,
    user: state.LoginReducer.user,
  };
};
const Applicant_Income_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_Income_Component);

export default Applicant_Income_Container;
