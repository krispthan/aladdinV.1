import './aladdin-multipleselectors.scss';
import React, { HTMLAttributes } from 'react';
import {
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBInput,
} from 'mdbreact';

export interface IAladdinMultipleselectorsProps
  extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  selectorList: IMultipleSelectorProps[];
}

export interface IMultipleSelectorProps {
  title: string;
}
export const AladdinMultipleselectors: React.FC<IAladdinMultipleselectorsProps> = (
  props: IAladdinMultipleselectorsProps
) => {
  return (
    <>
      <MDBSelect className="multiple-samples-selector">
        <MDBSelectInput selected="Choose Samples" />
        <MDBSelectOptions>
          {props.selectorList.map((selector, index) => {
            return (
              <div key={index} className="d-flex p-2">
                <MDBInput className="mx-2" type="checkbox" id="checkbox1" />
                <MDBSelectOption value="1">{selector.title}</MDBSelectOption>
              </div>
            );
          })}
        </MDBSelectOptions>
      </MDBSelect>
    </>
  );
};

export default AladdinMultipleselectors;
