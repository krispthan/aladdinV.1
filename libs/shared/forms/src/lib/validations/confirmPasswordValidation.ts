import * as yup from 'yup';
export const confirmPasswordValidation = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords does not match.')
  .required('Password must match.');
