export const SAVE_APPLICATION = 'SAVE_APPLICATION';
export const SAVE_APPLICATION_SUCCESS = 'SAVE_APPLICATION_SUCCESS';
export const SAVE_APPLICATION_ERROR = 'SAVE_APPLICATION_ERROR';
export const GET_APPLICATION_BY_USER_ID = 'GET_APPLICATION_BY_USER_ID';
export const GET_APPLICATION_BY_USER_ID_SUCCESS =
  'GET_APPLICATION_BY_USER_ID_SUCCESS';
export const GET_APPLICATION_BY_USER_ID_ERROR =
  'GET_APPLICATION_BY_USER_ID_ERROR';

export function SaveApplication(formData) {
  return {
    types: [SAVE_APPLICATION, SAVE_APPLICATION_SUCCESS, SAVE_APPLICATION_ERROR],
    payload: {
      request: {
        method: 'POST',
        url: '/createApplication_CapElevate',
        data: formData,
      },
    },
  };
}
export function GetApplicationByUserId(formData) {
  return {
    types: [
      GET_APPLICATION_BY_USER_ID,
      GET_APPLICATION_BY_USER_ID_SUCCESS,
      GET_APPLICATION_BY_USER_ID_ERROR,
    ],
    payload: {
      request: {
        method: 'POST',
        url: '/getAllApplication_CapElevate',
        data: formData,
      },
    },
  };
}
