import * as yup from 'yup';
export const addressValidation = yup.string().required('Address is required.');
