import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';
import Application_Queue_Component from '../components/Application_Queue_Component';
import {GetApplicationByUserId} from '../actions/ApplicationActions';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    getApplicationByUserId: applicant =>
      dispatch(GetApplicationByUserId(applicant)),
  };
};

const mapStateToProps = state => {
  // console.log('industryList', state.SetupsReducer.industryList);
  return {
    applicants: state.ApplicantReducer.applicants,
    user: state.LoginReducer.user,
    workQueue: state.ApplicationReducer.workQueue,
  };
};
const Application_Queue_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application_Queue_Component);

export default Application_Queue_Container;
