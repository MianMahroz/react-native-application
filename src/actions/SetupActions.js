export const GET_ID_CARD_TYPE = 'GET_ID_CARD_TYPE';
export const GET_ID_CARD_TYPE_SUCCESS = 'GET_ID_CARD_TYPE_SUCCESS';

export const GET_LOCALIZE_GENDER_LIST = 'GET_LOCALIZE_GENDER_LIST';
export const GET_LOCALIZE_GENDER_LIST_SUCCESS =
  'GET_LOCALIZE_GENDER_LIST_SUCCESS';
export const GET_PHONE_TYPE_LIST = 'GET_PHONE_TYPE_LIST';
export const GET_PHONE_TYPE_LIST_FAILURE = 'GET_PHONE_TYPE_LIST';
export const GET_PHONE_TYPE_LIST_SUCCESS = 'GET_PHONE_TYPE_LIST_SUCCESS';

export const GET_INDUSTRY_LIST = 'GET_INDUSTRY_LIST';
export const GET_INDUSTRY_LIST_SUCCESS = 'GET_INDUSTRY_LIST_SUCCESS';

export const GET_INDUSTRY_SUBTYPE_LIST = 'GET_INDUSTRY_SUBTYPE_LIST';
export const GET_INDUSTRY_SUBTYPE_LIST_SUCCESS =
  'GET_INDUSTRY_SUBTYPE_LIST_SUCCESS';

export const GET_HOKOU_LIST = 'GET_HOKOU_LIST';
export const GET_HOKOU_LIST_SUCCESS = 'GET_HOKOU_LIST_SUCCESS';

export const GET_MARTIAL_STATUS_LIST = 'GET_MARTIAL_STATUS_LIST';
export const GET_MARTIAL_STATUS_LIST_SUCCESS =
  'GET_MARTIAL_STATUS_LIST_SUCCESS';

export const GET_EDUCATION_LIST = 'GET_EDUCATION_LIST';
export const GET_EDUCATION_LIST_SUCCESS = 'GET_EDUCATION_LIST_SUCCESS';

export const GET_RACE_LIST = 'GET_RACE_LIST';
export const GET_RACE_LIST_SUCCESS = 'GET_RACE_LIST_SUCCESS';

export const GET_NATIONALITY_LIST = 'GET_NATIONALITY_LIST';
export const GET_NATIONALITY_LIST_SUCCESS = 'GET_NATIONALITY_LIST_SUCCESS';

export const GET_OCCUPATION_LIST = 'GET_OCCUPATION_LIST';
export const GET_OCCUPATION_LIST_SUCCESS = 'GET_OCCUPATION_LIST_SUCCESS';

// emergency contact details setup list
export const GET_RELATIONSHIP_LIST = 'GET_RELATIONSHIP_LIST';
export const GET_RELATIONSHIP_LIST_SUCCESS = 'GET_RELATIONSHIP_LIST_SUCCESS';

export const GET_PROVINCE_LIST = 'GET_PROVINCE_LIST';
export const GET_PROVINCE_LIST_SUCCESS = 'GET_PROVINCE_LIST_SUCCESS';

export const GET_CITIES_LIST = 'GET_CITIES_LIST';
export const GET_CITIES_LIST_SUCCESS = 'GET_CITIES_LIST_SUCCESS';

//mailing address setup list

export const GET_ADDRESS_TYPE_LIST = 'GET_ADDRESS_TYPE_LIST';
export const GET_ADDRESS_TYPE_LIST_SUCCESS = 'GET_ADDRESS_TYPE_LIST_SUCCESS';

export const GET_PROPERTY_UNIT_LIST = 'GET_PROPERTY_UNIT_LIST';
export const GET_PROPERTY_UNIT_LIST_SUCCESS = 'GET_PROPERTY_UNIT_LIST_SUCCESS';

export const GET_COUNTRY_LIST = 'GET_COUNTRY_LIST';
export const GET_COUNTRY_LIST_SUCCESS = 'GET_COUNTRY_LIST_SUCCESS';

export const GET_EMPLOYEE_TYPE_LIST = 'GET_EMPLOYEE_TYPE_LIST';
export const GET_EMPLOYEE_TYPE_LIST_SUCCESS = 'GET_EMPLOYEE_TYPE_LIST_SUCCESS';

export const GET_POSITION_LIST = 'GET_POSITION_LIST';
export const GET_POSITION_LIST_SUCCESS = 'GET_POSITION_LIST_SUCCESS';

export const GET_BUSINESS_NATURE_LIST = 'GET_BUSINESS_NATURE_LIST';
export const GET_BUSINESS_NATURE_LIST_SUCCESS =
  'GET_BUSINESS_NATURE_LIST_SUCCESS';

export default function GetIdCardTypesByCompanyId(formData) {
  console.log('ID CARD TYPES CALLED');
  return {
    types: [GET_ID_CARD_TYPE, GET_ID_CARD_TYPE_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getIdCardTypeListByCompany',
        data: formData,
      },
    },
  };
}
export function GetLocalizedSetupListForGender(formData) {
  console.log('gender action called', formData);
  return {
    types: [GET_LOCALIZE_GENDER_LIST, GET_LOCALIZE_GENDER_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getLocalizedSetupList',
        data: formData,
      },
    },
  };
}

export function GetPhoneTypeListByCompanyId(formData) {
  console.log('phone types list action called');
  return {
    types: [
      GET_PHONE_TYPE_LIST,
      GET_PHONE_TYPE_LIST_SUCCESS,
      GET_PHONE_TYPE_LIST_FAILURE,
    ],
    payload: {
      request: {
        method: 'POST',
        url: '/getPhoneTypeListByCompany',
        data: formData,
      },
    },
  };
}

export function GetIndustryListByCompanyId(formData) {
  return {
    types: [GET_INDUSTRY_LIST, GET_INDUSTRY_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getIndustryList',
        data: formData,
      },
    },
  };
}

export function GetIndustrySubTypeListByCompanyId(formData) {
  return {
    types: [GET_INDUSTRY_SUBTYPE_LIST, GET_INDUSTRY_SUBTYPE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getIndustrySubTypeListByIndustryCompanyId',
        data: formData,
      },
    },
  };
}

export function GetHokouListByCompanyId(formData) {
  return {
    types: [GET_HOKOU_LIST, GET_HOKOU_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getHokouListByCompanyId',
        data: formData,
      },
    },
  };
}

export function GetMaritalStatusListByCompanyId(formData) {
  return {
    types: [GET_MARTIAL_STATUS_LIST, GET_MARTIAL_STATUS_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getMaritalStatusListByCompany',
        data: formData,
      },
    },
  };
}

export function GetEducationListByCompanyId(formData) {
  return {
    types: [GET_EDUCATION_LIST, GET_EDUCATION_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getEducationListByCompany',
        data: formData,
      },
    },
  };
}

export function GetRaceList(formData) {
  return {
    types: [GET_RACE_LIST, GET_RACE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getRaceListByCompanyId',
        data: formData,
      },
    },
  };
}

export function GetNationalityListByCompany(formData) {
  return {
    types: [GET_NATIONALITY_LIST, GET_NATIONALITY_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getNationalityListByCompany',
        data: formData,
      },
    },
  };
}

export function GetOccupationListByCompany(formData) {
  return {
    types: [GET_OCCUPATION_LIST, GET_OCCUPATION_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getOccupationListByCompanyId',
        data: formData,
      },
    },
  };
}

// emergency contact details setup actions
export function GetRelationshipTypeListByCompany(formData) {
  console.log('action called', formData);
  return {
    types: [GET_RELATIONSHIP_LIST, GET_RELATIONSHIP_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getRelationshipTypeListByCompany',
        data: formData,
      },
    },
  };
}

export function GetProvinceList(formData) {
  return {
    types: [GET_PROVINCE_LIST, GET_PROVINCE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getProvinceList',
        data: formData,
      },
    },
  };
}

export function GetAllCitiesByDistrictId(formData) {
  return {
    types: [GET_CITIES_LIST, GET_CITIES_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getAllCitiesByDistrictId',
        data: formData,
      },
    },
  };
}

// mailing address setups actions
export function GetLocalizedSetupListForAddressType(formData) {
  return {
    types: [GET_ADDRESS_TYPE_LIST, GET_ADDRESS_TYPE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getLocalizedSetupList',
        data: formData,
      },
    },
  };
}

export function GetPropertyUnitListByCompany(formData) {
  return {
    types: [GET_PROPERTY_UNIT_LIST, GET_PROPERTY_UNIT_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getPropertyUnitListByCompany',
        data: formData,
      },
    },
  };
}

export function GetCountryList(formData) {
  return {
    types: [GET_COUNTRY_LIST, GET_COUNTRY_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getCountryList',
        data: formData,
      },
    },
  };
}

export function GetEmployeeTypeList(formData) {
  return {
    types: [GET_EMPLOYEE_TYPE_LIST, GET_EMPLOYEE_TYPE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getEmployeeTypeListByCompany',
        data: formData,
      },
    },
  };
}

export function GetPositionList(formData) {
  return {
    types: [GET_POSITION_LIST, GET_POSITION_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getBPDesignationListByCompanyId',
        data: formData,
      },
    },
  };
}
export function GetBusinessNatureList(formData) {
  return {
    types: [GET_BUSINESS_NATURE_LIST, GET_BUSINESS_NATURE_LIST_SUCCESS],
    payload: {
      request: {
        method: 'POST',
        url: '/getBusinessNatureListByCompanyId',
        data: formData,
      },
    },
  };
}
