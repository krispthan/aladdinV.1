import './aladdin-filter.scss';
import React, { HTMLAttributes } from 'react';
import { MDBInput } from 'mdbreact';

/* Create a filter component 
generate  th filter 

*/

export interface IAladdinFilterProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  filterList: IFilterProps[];
}
export interface IFilterProps {
  label: string;
  value: boolean;
}

export const AladdinFilter: React.FC<IAladdinFilterProps> = (
  props: IAladdinFilterProps
) => {
  return (
    <div className={`d-flex filter-checkboxes  ${props.classes}`}>
      {props.filterList.map((item, index) => {
        return (
          <MDBInput
            filled
            key={index}
            label={item.label}
            checked={item.value}
            type="checkbox"
            id={item.label}
            containerClass="mr-3"
          />
        );
      })}
    </div>
  );
};

export default AladdinFilter;
