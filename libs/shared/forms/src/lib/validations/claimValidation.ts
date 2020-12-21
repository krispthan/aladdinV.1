import * as yup from 'yup';
export const claimValidation = yup
  .string()
  .required('Please enter your code.')
  .matches(/^[a-zA-Z0-9-]*$/);
