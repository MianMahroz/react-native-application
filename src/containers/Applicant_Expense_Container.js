import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';
import Applicant_Expense_Component from '../components/Applicant_Expense_Component';

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
const Applicant_Expense_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_Expense_Component);

export default Applicant_Expense_Container;
