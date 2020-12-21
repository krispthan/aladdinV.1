export interface IPasswordFormData {
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export interface IProfileFormData {
  firstName?: string;
  lastName?: string;
  address?: string;
  address2?: string;
  phoneNumber?: number;
  email: string;
}

export interface IManageSampleMulSelector {
  multiselect: string;
}
export interface IContactFormData {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface IClaimCodeData {
  claimCode: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
  confirmPassword: string;
  message?: any[];
}

export interface IRegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  project: {} | string;
}

export interface ISearchForm {
  search: string;
}

export interface ISampleNameForm {
  name: string;
}

export interface ICreateProjectForm {
  name: string;
  tag: string;
  description: string;
  type: string | number;
}

export interface IControlGroupFormData {
  name: string;
}

export interface IRadioReads {
  singleRead: string;
  pairRead: string;
}
