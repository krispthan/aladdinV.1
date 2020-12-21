import * as yup from 'yup';
export const phoneNumberValidation = yup.string().test({
  name: 'phone-validation',
  message: 'Must have valid phone number.',
  test: function () {
    const { phoneNumber } = this.parent;
    console.log(phoneNumber.length);
    return phoneNumber.length === 15;
  },
});

/* Might no longer need this validation since the form only have the user explicitly type in number */
