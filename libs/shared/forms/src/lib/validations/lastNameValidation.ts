import * as yup from 'yup';
export const lastNameValidation = yup
  .string()
  .required('Last name is required.');
