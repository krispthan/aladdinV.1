import * as yup from 'yup';
export const emailValidation = yup
  .string()
  .email('Enter a valid email.')
  .required('Enter an email.');
