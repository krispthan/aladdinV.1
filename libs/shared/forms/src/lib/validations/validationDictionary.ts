import { FormValidation } from '@aladdin/domain-models';
import { BaseSchema } from 'yup';
import { addressValidation } from './addressValidation';
import { lastNameValidation } from './lastNameValidation';
import { emailValidation } from './emailValidation';
import { firstNameValidation } from './firstNameValidation';
import { passwordValidation } from './passwordValidation';
import { phoneNumberValidation } from './phoneNumberValidation';
import { confirmPasswordValidation } from './confirmPasswordValidation';
import { claimValidation } from './dist/claimValidation';

export const ValidationDictionary: Record<FormValidation, BaseSchema> = {
  [FormValidation.email]: emailValidation,
  [FormValidation.phoneNumber]: phoneNumberValidation,
  [FormValidation.firstName]: firstNameValidation,
  [FormValidation.lastName]: lastNameValidation,
  [FormValidation.address]: addressValidation,
  [FormValidation.password]: passwordValidation,
  [FormValidation.confirmPassword]: confirmPasswordValidation,
  [FormValidation.claimCode]: claimValidation,
};