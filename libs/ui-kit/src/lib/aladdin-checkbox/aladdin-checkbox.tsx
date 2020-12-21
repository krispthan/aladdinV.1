import { MDBInput } from "mdbreact";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";

import "./aladdin-checkbox.scss";

/* Custom Checkbox used to handle check boxes in forms*/
export interface IAladdinCheckboxProps {
  classes?: string;
  id: string;
  label?: string;
  name: string;
  defaultValue: boolean;
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
      checked={checked}
      onChange={handleChecked}
    />
  );
};

export default AladdinCheckbox;
