import React, { useCallback, useMemo, useState, useEffect } from 'react';

import { AsYouType } from 'libphonenumber-js';
import { ValidationDictionary } from '../validations/validationDictionary';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormValidation } from '@aladdin/domain-models';
import { CreateYupValidation } from '../validations/create-validation-dictionary';

/*Third Party Libraries used :
 * Objective: To use our custom react hook forms per form handling
 * React hook forms
 * Validation handling with Yup
 * libPhoneNumber -format phone number
 */
export const customUseForm = <T>(validations: FormValidation[] = []) => {
  const validationSchema = useMemo(
    () => yup.object().shape(CreateYupValidation(validations)),
    []
  );
  const [values, setSelect] = useState({
    selectedOption: [],
  });

  const {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    getValues,
  } = useForm<T>({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
  };

  /* Need to handle when the user types in number, automatically formats the number - do not need to validate */
  const formatPhoneNumber = (val: string) => {
    if (!val) {
      return val;
    }
    val = truncatePhoneNumber(val);
    return new AsYouType('US').input(val);
  };

  const truncatePhoneNumber = (val: string) => {
    if (val.length > 14) {
      return val.substring(0, 14);
    }
    return val;
  };
  /* Need to for multipleSelects */
  // const handleMultiSelect = (selectedOption) => {
  //   setValue('reactSelect', selectedOption);
  //   setSelect({ selectedOption });
  // };

  /* Handle form validation using Validation Dictionary */
  const handleValidation = (validation: string) => {
    return ValidationDictionary[validation];
  };
  const onSubmit = (data) => console.log(data);
  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
    formatPhoneNumber,
    handleChange,
    getValues,
    // handleMultiSelect,
    control,
    handleValidation,
  };
};
