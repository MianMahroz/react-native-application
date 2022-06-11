import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';

import Applicant_Liabilities_Component from '../components/Applicant_Liabilities_Component';
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
const Applicant_Liabilities_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_Liabilities_Component);

export default Applicant_Liabilities_Container;
