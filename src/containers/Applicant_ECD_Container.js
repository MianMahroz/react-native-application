import {connect} from 'react-redux';
import {
  AddApplicant,
  RemoveApplicant,
  UpdatePage,
  UpdateApplicant,
  UpdateECDPage,
  AddECD,
} from '../actions/ApplicantActions';
import Applicant_ECD_Component from '../components/Applicant_ECD_Component';
import {
  GetRelationshipTypeListByCompany,
  GetProvinceList,
  GetAllCitiesByDistrictId,
} from '../actions/SetupActions';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    addApplicant: applicantObj => dispatch(AddApplicant(applicantObj)),
    addECD: (index, payload) => dispatch(AddECD(index, payload)),
    removeApplicant: tabName => dispatch(RemoveApplicant(tabName)),
    updatePage: page => dispatch(UpdatePage(page)),
    updateECDPage: page => dispatch(UpdateECDPage(page)),
    getRelationshipTypeListByCompany: formData =>
      dispatch(GetRelationshipTypeListByCompany(formData)),
    getProvinceList: formData => dispatch(GetProvinceList(formData)),
    getAllCitiesByDistrictId: formData =>
      dispatch(GetAllCitiesByDistrictId(formData)),
  };
};

const mapStateToProps = state => {
  // console.log(
  //   'state',
  //   state.ApplicantReducer.applicants[0].emergencyContactDetails,
  // );
  return {
    applicants: state.ApplicantReducer.applicants,
    user: state.LoginReducer.user,
    page: state.ApplicantReducer.page,
    ecdPage: state.ApplicantReducer.ecdPage,
    relationshipList: state.SetupsReducer.relationshipList,
    provinceList: state.SetupsReducer.provinceList,
    citiesList: state.SetupsReducer.citiesList,
  };
};
const Applicant_ECD_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_ECD_Component);

export default Applicant_ECD_Container;
