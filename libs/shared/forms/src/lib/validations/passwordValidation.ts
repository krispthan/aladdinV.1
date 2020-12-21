import * as yup from 'yup';
export const passwordValidation = yup
  .string()
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(
    /()\w+/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  );
