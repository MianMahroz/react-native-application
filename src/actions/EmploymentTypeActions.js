export const SAVE_EMPLOYMENT_TYPE = 'SAVE_EMPLOYMENT_TYPE';

const SaveEmploymentType = employmentType => {
  return {
    type: SAVE_EMPLOYMENT_TYPE,
    payload: employmentType,
  };
};

export default SaveEmploymentType;
