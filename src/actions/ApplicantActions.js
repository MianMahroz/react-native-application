export const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
export const UPDATE_TAB_INDEX = 'UPDATE_TAB_INDEX';
export const ADD_APPLICANT = 'ADD_APPLICANT';
export const REMOVE_APPLICANT = 'REMOVE_APPLICANT';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_ECD_PAGE = 'UPDATE_ECD_PAGE';
export const UPDATE_EA_PAGE = 'UPDATE_EA_PAGE';
export const UPDATE_ED_PAGE = 'UPDATE_ED_PAGE';

export const UPDATE_APPLICANT = 'UPDATE_APPLICANT';
export const ADD_ECD = 'ADD_ECD';
export const UPDATE_APPLICANT_STATUS = 'UPDATE_APPLICANT_STATUS';

export const UpdateApplicantStatus = data => {
  return {
    type: UPDATE_APPLICANT_STATUS,
    payload: data,
  };
};

const UpdateApplication = data => {
  return {
    type: UPDATE_APPLICATION,
    payload: data,
  };
};

export const AddApplicant = data => {
  return {
    type: ADD_APPLICANT,
    payload: data,
  };
};

export const AddECD = (index, data) => {
  console.log('index', index);
  console.log('data', data);
  return {
    type: ADD_ECD,
    payload: data,
    applicantIndex: index,
  };
};

export const RemoveApplicant = data => {
  return {
    type: REMOVE_APPLICANT,
    payload: data,
  };
};
export const UpdatePage = data => {
  return {
    type: UPDATE_PAGE,
    payload: data,
  };
};

export const UpdateECDPage = data => {
  return {
    type: UPDATE_ECD_PAGE,
    payload: data,
  };
};
export const UpdateEAPage = data => {
  return {
    type: UPDATE_EA_PAGE,
    payload: data,
  };
};
export const UpdateEDPage = data => {
  return {
    type: UPDATE_ED_PAGE,
    payload: data,
  };
};
export const UpdateApplicant = data => {
  return {
    type: UPDATE_APPLICANT,
    payload: data,
  };
};

export default UpdateApplication;
