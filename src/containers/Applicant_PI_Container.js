import {connect} from 'react-redux';
import {UpdateApplicant} from '../actions/ApplicantActions';
import Applicant_PI_Component from '../components/Applicant_PI_Component';
import GetIdCardTypesByCompanyId, {
  GET_ID_CARD_TYPE,
  GetLocalizedSetupListForGender,
  GetPhoneTypeListByCompanyId,
  GetIndustryListByCompanyId,
  GetIndustrySubTypeListByCompanyId,
  GetHokouListByCompanyId,
  GetMaritalStatusListByCompanyId,
  GetEducationListByCompanyId,
  GetRaceList,
  GetNationalityListByCompany,
  GetOccupationListByCompany,
} from '../actions/SetupActions';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    getIdCardTypes: formData => dispatch(GetIdCardTypesByCompanyId(formData)),
    getGenderList: formData =>
      dispatch(GetLocalizedSetupListForGender(formData)),
    getPhoneTypeList: formData =>
      dispatch(GetPhoneTypeListByCompanyId(formData)),
    getIndustryList: formData => dispatch(GetIndustryListByCompanyId(formData)),
    getIndustrySubTypeList: formData =>
      dispatch(GetIndustrySubTypeListByCompanyId(formData)),
    getHokouList: formData => dispatch(GetHokouListByCompanyId(formData)),
    getMartialStatusList: formData =>
      dispatch(GetMaritalStatusListByCompanyId(formData)),
    getEducationList: formData =>
      dispatch(GetEducationListByCompanyId(formData)),
    getRaceList: formData => dispatch(GetRaceList(formData)),
    getNationalityList: formData =>
      dispatch(GetNationalityListByCompany(formData)),
    getOccupationList: formData =>
      dispatch(GetOccupationListByCompany(formData)),
  };
};

const mapStateToProps = state => {
  // console.log('industryList', state.SetupsReducer.industryList);
  return {
    applicants: state.ApplicantReducer.applicants,
    idCardTypes: state.SetupsReducer.idCardTypes,
    genderList: state.SetupsReducer.genderList,
    phoneTypesList: state.SetupsReducer.phoneTypesList,
    industryList: state.SetupsReducer.industryList,
    industrySubTypeList: state.SetupsReducer.industrySubTypeList,
    hokouList: state.SetupsReducer.hokouList,
    martialStatusList: state.SetupsReducer.martialStatusList,
    educationList: state.SetupsReducer.educationList,
    raceList: state.SetupsReducer.raceList,
    nationalityList: state.SetupsReducer.nationalityList,
    occupationList: state.SetupsReducer.occupationList,
    user: state.LoginReducer.user,
  };
};
const Applicant_PI_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_PI_Component);

export default Applicant_PI_Container;
