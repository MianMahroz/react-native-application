import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';

import Applicant_Liabilities_Component from '../components/Applicant_Liabilities_Component';
import Applicant_Asset_Component from '../components/Applicant_Asset_Component';
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
const Applicant_Asset_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_Asset_Component);

export default Applicant_Asset_Container;
