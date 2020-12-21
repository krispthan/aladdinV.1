import { MDBInput } from 'mdbreact';
import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import './aladdin-checkbox.scss';

/* Custom Checkbox used to handle check boxes in forms*/
export interface IAladdinCheckboxProps {
  classes?: string;
  id: string;
  control: Control;
  label?: string;
  name: string;
  defaultValue: boolean;
  register: any;
}

export const AladdinCheckbox: React.FC<IAladdinCheckboxProps> = (
  props: IAladdinCheckboxProps
) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <input
      className={`${props.classes} aladdin-checkbox control `}
      name={props.name}
      type="checkbox"
      id={props.id}
      ref={props.register}
      checked={checked}
      onChange={handleChecked}
    />
  );
};

export default AladdinCheckbox;
