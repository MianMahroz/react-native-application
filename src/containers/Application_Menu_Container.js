import {connect} from 'react-redux';
import {UpdateApplicantStatus} from '../actions/ApplicantActions';
import ApplicationMenu from '../components/ApplicationMenu';
import {SaveApplication} from '../actions/ApplicationActions';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicantStatus: data => dispatch(UpdateApplicantStatus(data)),
    SaveApplication: data => dispatch(SaveApplication(data)),
  };
};

const mapStateToProps = state => {
  return {
    applicantStatus: state.ApplicantReducer.applicantStatus,
    application: state.ApplicantReducer.application,
    applicants: state.ApplicantReducer.applicants,
    selectedModel: state.CompareModelListReducer.selectedModel,
    user: state.LoginReducer.user,
  };
};
const ApplicationMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationMenu);

export default ApplicationMenuContainer;
