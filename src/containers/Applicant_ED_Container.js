import {connect} from 'react-redux';
import {
  AddApplicant,
  RemoveApplicant,
  UpdatePage,
  UpdateApplicant,
  UpdateEAPage,
  UpdateEDPage,
} from '../actions/ApplicantActions';
import {
  GetProvinceList,
  GetAllCitiesByDistrictId,
  GetCountryList,
  GetEmployeeTypeList,
  GetPositionList,
  GetBusinessNatureList,
  GetPhoneTypeListByCompanyId,
} from '../actions/SetupActions';
import Applicant_ED_Component from '../components/Applicant_ED_Component';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    addApplicant: applicantObj => dispatch(AddApplicant(applicantObj)),
    removeApplicant: tabName => dispatch(RemoveApplicant(tabName)),
    updatePage: page => dispatch(UpdatePage(page)),
    getCountryList: formData => dispatch(GetCountryList(formData)),
    getProvinceList: formData => dispatch(GetProvinceList(formData)),
    getAllCitiesByDistrictId: formData =>
      dispatch(GetAllCitiesByDistrictId(formData)),
    updateEDPage: page => dispatch(UpdateEDPage(page)),
    getEmployeeTypeList: formData => dispatch(GetEmployeeTypeList(formData)),
    getPositionList: formData => dispatch(GetPositionList(formData)),
    getBusinessNature: formData => dispatch(GetBusinessNatureList(formData)),
    getPhoneTypeList: formData =>
      dispatch(GetPhoneTypeListByCompanyId(formData)),
  };
};

const mapStateToProps = state => {
  return {
    applicants: state.ApplicantReducer.applicants,
    edPage: state.ApplicantReducer.edPage,
    user: state.LoginReducer.user,
    page: state.ApplicantReducer.page,
    employeeTypeList: state.SetupsReducer.employeeTypeList,
    positionList: state.SetupsReducer.positionList,
    businessNatureList: state.SetupsReducer.businessNatureList,
    countryList: state.SetupsReducer.countryList,
    provinceList: state.SetupsReducer.provinceList,
    citiesList: state.SetupsReducer.citiesList,
    phoneTypesList: state.SetupsReducer.phoneTypesList,
  };
};
const Applicant_ED_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_ED_Component);

export default Applicant_ED_Container;
