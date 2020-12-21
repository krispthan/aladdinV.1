import React, { ButtonHTMLAttributes } from 'react';

/* Create custom style buttons*/
export interface CustomButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: string;
  classes?: string;
  btnClicked?: () => void;
}
const DEFAULT_BUTTON_TYPE = 'success ';

export const AladdinButton: React.FC<CustomButtonsProps> = (props) => {
  const buttonType = props.btnType ?? DEFAULT_BUTTON_TYPE;
  return (
    <button
      className={`main-btn ${buttonType} ${props.classes}`}
      onClick={props.btnClicked}
    >
      {props.children}
    </button>
  );
};
