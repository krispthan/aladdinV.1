import * as yup from 'yup';
export const firstNameValidation = yup
  .string()
  .required('First name is required.');
