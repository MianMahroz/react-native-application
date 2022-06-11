import {connect} from 'react-redux';
import {
  AddApplicant,
  RemoveApplicant,
  UpdatePage,
  UpdateApplicant,
  UpdateECDPage,
  UpdateEAPage,
} from '../actions/ApplicantActions';
import {
  GetRelationshipTypeListByCompany,
  GetProvinceList,
  GetAllCitiesByDistrictId,
  GetLocalizedSetupListForAddressType,
  GetPropertyUnitListByCompany,
  GetCountryList,
} from '../actions/SetupActions';
import Applicant_EA_Component from '../components/Applicant_EA_Component';

const mapDispatchToProps = dispatch => {
  return {
    updateApplicant: applicant => dispatch(UpdateApplicant(applicant)),
    addApplicant: applicantObj => dispatch(AddApplicant(applicantObj)),
    removeApplicant: tabName => dispatch(RemoveApplicant(tabName)),
    updatePage: page => dispatch(UpdatePage(page)),
    getLocalizedSetupListForAddressType: formData =>
      dispatch(GetLocalizedSetupListForAddressType(formData)),
    getPropertyUnitListByCompany: formData =>
      dispatch(GetPropertyUnitListByCompany(formData)),
    getCountryList: formData => dispatch(GetCountryList(formData)),
    getProvinceList: formData => dispatch(GetProvinceList(formData)),
    getAllCitiesByDistrictId: formData =>
      dispatch(GetAllCitiesByDistrictId(formData)),
    updateEAPage: page => dispatch(UpdateEAPage(page)),
  };
};

const mapStateToProps = state => {
  // console.log(
  //   'applicants Object',
  //   state.ApplicantReducer.applicants[0].applicantDetail.applicantContactDetail
  //     .addresses[0].addressTypeSelected,
  // );
  return {
    applicants: state.ApplicantReducer.applicants,
    eaPage: state.ApplicantReducer.eaPage,
    user: state.LoginReducer.user,
    page: state.ApplicantReducer.page,
    addressTypeList: state.SetupsReducer.addressTypeList,
    propertyUnitList: state.SetupsReducer.propertyUnitList,
    countryList: state.SetupsReducer.countryList,
    provinceList: state.SetupsReducer.provinceList,
    citiesList: state.SetupsReducer.citiesList,
  };
};
const Applicant_EA_Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applicant_EA_Component);

export default Applicant_EA_Container;
