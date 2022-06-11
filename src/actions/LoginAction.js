export const LOGIN_SUBMIT = 'LOGIN_SUCCESS';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL';
export const ERROR = 'LOGIN_SUCCESS';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export function AuthenticateUser(formData) {
  formData.requestFrom = 'pos_web';
  console.log('Form Action', formData);
  return {
    types: [AUTHENTICATE_USER, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL],
    payload: {
      request: {
        method: 'POST',
        url: '/user',
        data: formData,
      },
    },
  };
}
