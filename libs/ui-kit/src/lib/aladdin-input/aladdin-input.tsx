import './aladdin-input.scss';
import React, { HTMLAttributes } from 'react';
import { MDBInput } from 'mdbreact';
import { Control, Controller } from 'react-hook-form';

/* Custom Aladdin Input to be used in forms */
export interface AladdinInputProps extends HTMLAttributes<HTMLInputElement> {
  elType?: string;
  classes?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  name: string;
  type: 'email' | 'password' | 'text' | 'textarea';
  outline?: boolean;
  label: string;
  ariaLabel?: string;
  formatValueOnChange?: (value) => any;
  control: Control;
}
export const AladdinInput: React.FC<AladdinInputProps> = (
  props: AladdinInputProps
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={''}
      render={({ value, onChange }) => {
        const contextValue = props.formatValueOnChange
          ? props.formatValueOnChange(value)
          : value;
        return (
          <MDBInput
            className={`custom-input ${props.classes}`}
            control
            outline={props.outline}
            onChange={onChange}
            containerClass="mb-0"
            value={contextValue}
            size="sm"
            label={props.label}
            name={props.name}
            type={props.type}
            aria-label={props.ariaLabel}
          />
        );
      }}
    />
  );
};
