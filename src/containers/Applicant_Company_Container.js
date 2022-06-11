import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';
import {GetPhoneTypeListByCompanyId} from '../actions/SetupActions';
import Applicant_Company_Component from '../components/Applicant_Company_Component';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    getPhoneTypeList: formData =>
      dispatch(GetPhoneTypeListByCompanyId(formData)),
  };
};

const mapStateToProps = state => {
  // console.log('industryList', state.SetupsReducer.industryList);
  return {
    applicants: state.ApplicantReducer.applicants,
    phoneTypesList: state.SetupsReducer.phoneTypesList,
    user: state.LoginReducer.user,
  };
};
const Applicant_Company_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_Company_Component);

export default Applicant_Company_Container;
