import {connect} from 'react-redux';
import ApplicantComponent from '../components/ApplicantComponent';
import UpdateApplication, {
  AddApplicant,
  RemoveApplicant,
  UpdatePage,
  UpdateApplicantStatus,
} from '../actions/ApplicantActions';

const mapDispatchToProps = dispatch => {
  return {
    updateApplication: data => dispatch(UpdateApplication(data)),
    addApplicant: applicantObj => dispatch(AddApplicant(applicantObj)),
    removeApplicant: tabName => dispatch(RemoveApplicant(tabName)),
    updatePage: page => dispatch(UpdatePage(page)),
    updateApplicantStatus: data => dispatch(UpdateApplicantStatus(data)),
  };
};

const mapStateToProps = state => {
  // console.log(
  //   'applicants Object',
  //   state.ApplicantReducer.applicants[0].applicantDetail.localizeName,
  // );
  // console.log('page', state.ApplicantReducer.page);
  return {
    application: state.ApplicantReducer.application,
    applicants: state.ApplicantReducer.applicants,
    page: state.ApplicantReducer.page,
    applicantStatus: state.ApplicantReducer.applicantStatus,
  };
};
const ApplicantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicantComponent);

export default ApplicantContainer;
