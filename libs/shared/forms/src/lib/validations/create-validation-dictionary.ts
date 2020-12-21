import { FormValidation } from '@aladdin/domain-models';
import { ValidationDictionary } from './validationDictionary';

export const CreateYupValidation = (validations: FormValidation[]) => {
  const YupValidationObject = validations.reduce(
    (accumulator, valdationKey) => {
      accumulator[valdationKey] = ValidationDictionary[valdationKey];
      return accumulator;
    },
    {}
  );
  return YupValidationObject;
};
