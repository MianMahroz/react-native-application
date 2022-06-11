import {
  GET_ID_CARD_TYPE_SUCCESS,
  GET_LOCALIZE_GENDER_LIST_SUCCESS,
  GET_PHONE_TYPE_LIST_SUCCESS,
  GET_INDUSTRY_LIST_SUCCESS,
  GET_INDUSTRY_SUBTYPE_LIST_SUCCESS,
  GET_HOKOU_LIST_SUCCESS,
  GET_MARTIAL_STATUS_LIST_SUCCESS,
  GET_EDUCATION_LIST_SUCCESS,
  GET_RACE_LIST_SUCCESS,
  GET_NATIONALITY_LIST_SUCCESS,
  GET_OCCUPATION_LIST_SUCCESS,
  GET_RELATIONSHIP_LIST_SUCCESS,
  GET_PROVINCE_LIST_SUCCESS,
  GET_CITIES_LIST_SUCCESS,
  GET_ADDRESS_TYPE_LIST_SUCCESS,
  GET_COUNTRY_LIST_SUCCESS,
  GET_PROPERTY_UNIT_LIST_SUCCESS,
  GET_EMPLOYEE_TYPE_LIST_SUCCESS,
  GET_POSITION_LIST_SUCCESS,
  GET_BUSINESS_NATURE_LIST_SUCCESS,
} from '../actions/SetupActions';

const initialState = {
  idCardTypes: [],
  genderList: [],
  phoneTypesList: [],
  industryList: [],
  industrySubTypeList: [],
  hokouList: [],
  martialStatusList: [],
  educationList: [],
  raceList: [],
  nationalityList: [],
  occupationList: [],
  relationshipList: [],
  provinceList: [],
  citiesList: [],
  addressTypeList: [],
  propertyUnitList: [],
  countryList: [],
  employeeTypeList: [],
  positionList: [],
  businessNatureList: [],
};
export const SetupsReducer = (state = initialState, action) => {
  // console.log('Action type', action);
  switch (action.type) {
    case GET_ID_CARD_TYPE_SUCCESS:
      return {...state, idCardTypes: action.payload.data.data.setups};
    case GET_LOCALIZE_GENDER_LIST_SUCCESS:
      // console.log('gender success', action.payload.data.data);
      return {...state, genderList: action.payload.data.data.setupList};
    case GET_PHONE_TYPE_LIST_SUCCESS:
      // console.log('PHONE TYPES SUCCESS', action.payload.data.data);
      return {...state, phoneTypesList: action.payload.data.data.setups};
    case GET_INDUSTRY_LIST_SUCCESS:
      // console.log('INDUSTRY LIST SUCCESS', action.payload.data.data.setups);
      return {...state, industryList: action.payload.data.data.setups};
    case GET_INDUSTRY_SUBTYPE_LIST_SUCCESS:
      console.log('INDUSTRY SUB TYPE LIST SUCCESS', action.payload.data);
      return {
        ...state,
        industrySubTypeList: action.payload.data.data.IndustrySubType,
      };
    case GET_HOKOU_LIST_SUCCESS:
      // console.log('Hukou List SUCCESS', action.payload.data);
      return {...state, hokouList: action.payload.data};
    case GET_MARTIAL_STATUS_LIST_SUCCESS:
      // console.log('marital Status SUCCESS', action.payload.data.data)
      return {...state, martialStatusList: action.payload.data.data.setups};
    case GET_EDUCATION_LIST_SUCCESS:
      // console.log('EDUCATION SUCCESS', action.payload.data.data);
      return {...state, educationList: action.payload.data.data.setups};
    case GET_RACE_LIST_SUCCESS:
      // console.log('CITIZEN SUCCESS', action.payload.data.data);
      return {...state, raceList: action.payload.data.data.Race};
    case GET_NATIONALITY_LIST_SUCCESS:
      // console.log('Nationality List SUCCESS', action.payload.data);
      return {...state, nationalityList: action.payload.data.data.setups};
    case GET_OCCUPATION_LIST_SUCCESS:
      // console.log('OCCUPATION SUCCESS', action.payload.data);
      return {...state, occupationList: action.payload.data.data.Occupation};
    case GET_RELATIONSHIP_LIST_SUCCESS:
      // console.log('Relationship SUCCESS', action.payload.data.data.setups);
      return {...state, relationshipList: action.payload.data.data.setups};
    case GET_PROVINCE_LIST_SUCCESS:
      // console.log('Province SUCCESS', action.payload.data.data);
      return {...state, provinceList: action.payload.data.data};
    case GET_CITIES_LIST_SUCCESS:
      // console.log('citiesList SUCCESS');
      return {...state, citiesList: action.payload.data.data.cities};
    case GET_ADDRESS_TYPE_LIST_SUCCESS:
      // console.log('GET_ADDRESS_TYPE_LIST_SUCCESS');
      return {...state, addressTypeList: action.payload.data.data.setupList};
    case GET_PROPERTY_UNIT_LIST_SUCCESS:
      // console.log('GET_PROPERTY_UNIT_LIST_SUCCESS');
      return {...state, propertyUnitList: action.payload.data.data.setups};
    case GET_COUNTRY_LIST_SUCCESS:
      // console.log('GET_COUNTRY_LIST_SUCCESS');
      return {...state, countryList: action.payload.data.data.setups};
    case GET_EMPLOYEE_TYPE_LIST_SUCCESS:
      // console.log('Employee Type List', action.payload.data);
      return {...state, employeeTypeList: action.payload.data.data.setups};
    case GET_POSITION_LIST_SUCCESS:
      // console.log('Position List', action.payload.data);
      return {...state, positionList: action.payload.data.data.BPDesignation};
    case GET_BUSINESS_NATURE_LIST_SUCCESS:
      // console.log('Business Nature List Success', action.payload.data);
      return {
        ...state,
        businessNatureList: action.payload.data.data.BusinessNature,
      };

    default:
      return state;
  }
};
