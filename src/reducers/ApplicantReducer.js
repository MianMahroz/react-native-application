import {
  UPDATE_APPLICATION,
  UPDATE_TAB_INDEX,
  ADD_APPLICANT,
  REMOVE_APPLICANT,
  UPDATE_PAGE,
  UPDATE_APPLICANT,
  UPDATE_ECD_PAGE,
  ADD_ECD,
  UPDATE_EA_PAGE,
  UPDATE_ED_PAGE,
  UPDATE_APPLICANT_STATUS,
} from '../actions/ApplicantActions';
import {
  Application,
  Applicant,
  Address,
  PhoneNumber,
  EmergencyContactDetail,
  Employment,
} from '../core/applicationDto';
import {BORROWER_IND} from '../core/ApplicantTypes';

const applicantInitObj = new Applicant();
applicantInitObj.tabName = BORROWER_IND;
applicantInitObj.tabIndex = 0;
applicantInitObj.applicantDetail.tabName = 'PersonalInformation';
applicantInitObj.applicantDetail.tabIndex = 0;
// adding address array in case of borrower
var addressObj = new Address();
addressObj.tabIndex = 0;
addressObj.tabName = 'Address';
var phoneNumberArr = [];
phoneNumberArr.push(new PhoneNumber());
addressObj.phoneNumbers = phoneNumberArr;
// var addressArr = [];
// addressArr.push(addressObj);
applicantInitObj.applicantDetail.applicantContactDetail.addresses.push(
  addressObj,
);
// emergency contact details
var ecdObj = new EmergencyContactDetail();
ecdObj.tabName = 'EmergencyContactDetails';
ecdObj.tabIndex = 0;
var arr = [];
arr.push(ecdObj);

applicantInitObj.emergencyContactDetails = arr;

// Employee Details
var edArr = [];
var edObj = new Employment();
edObj.tabName = 'EMPLOYMENT';
edObj.tabIndex = 0;

edArr.push(edObj);
applicantInitObj.employments = edArr;

const initialState = {
  page: 0,
  ecdPage: 0,
  eaPage: 0,
  application: {},
  applicants: [applicantInitObj],
  findRetailerStatus: 'pending',
  applicantStatus: 'pending',
  documents: 'pending',
};

const ApplicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPLICANT:
      // console.log('add Applicant', action.payload);
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    case REMOVE_APPLICANT:
      console.log('Remove Applicant Called', action.payload);
      return {
        ...state,
        applicants: state.applicants.filter(
          obj => obj.tabName !== action.payload,
        ),
        page: state.applicants.length - 1,
      };
    case UPDATE_PAGE:
      return {...state, page: action.payload};
    case UPDATE_ECD_PAGE:
      return {...state, ecdPage: action.payload};
    case UPDATE_EA_PAGE:
      return {...state, eaPage: action.payload};
    case UPDATE_ED_PAGE:
      return {...state, edPage: action.payload};
    case UPDATE_APPLICANT_STATUS:
      return {...state, applicantStatus: action.payload};
    case UPDATE_APPLICANT:
      return {
        ...state,
        applicants: state.applicants[action.payload.tabIndex]
          ? ((state.applicants[action.payload.tabIndex] = action.payload),
            state.applicants)
          : state.applicants,
      };
    // state.applicants[action.applicantIndex].emergencyContactDetails
    case ADD_ECD:
      console.log(
        'add ECD reducer called',
        state.applicants[action.applicantIndex].emergencyContactDetails,
      );
      return {
        ...state,
        applicants: state.applicants[action.applicantIndex]
          ? [
              state.applicants[action.applicantIndex].emergencyContactDetails,
              action.payload,
            ]
          : state.applicants,
      };
    default:
      return state;
  }
};

export default ApplicantReducer;
// [action.payload.tabIndex]
//           ? (state.applicants[action.payload.tabIndex] = action.payload)
//           : state.applicants,
