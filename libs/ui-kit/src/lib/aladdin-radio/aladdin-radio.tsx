import { MDBInput } from 'mdbreact';
import React, { useState } from 'react';

import './aladdin-radio.scss';
import { SequenceReadType } from '@aladdin/domain-models';

/* Custom radios to use in forms 
 - will have to refactor this radio


*/
export interface IAladdinRadioProps {
  label: string;
  id: string;
  ariaLabel: string;
  checked: string;
}

export const AladdinRadio: React.FC<IAladdinRadioProps> = (
  props: IAladdinRadioProps
) => {
  const [checkedRadio, setCheckedRadio] = useState<
    Record<SequenceReadType, boolean>
  >({
    [SequenceReadType.singleEnd]: true,
    [SequenceReadType.pairedEnd]: false,
  });

  const handleCheckedReads = (clickedRadio: SequenceReadType) => {
    const radios = Object.keys(checkedRadio).reduce(
      (accumulator, currentRadio) => {
        if (currentRadio === clickedRadio) {
          accumulator[currentRadio] = true;
        } else {
          accumulator[currentRadio] = false;
        }
        return accumulator;
      },
      {} as Record<SequenceReadType, boolean>
    );
    setCheckedRadio(radios);
  };
  return (
    <input
      onChange={() => handleCheckedReads(SequenceReadType.singleEnd)}
      checked={checkedRadio.SingleEnd}
      // label={props.label}
      type="radio"
      id={props.id}
      aria-label={props.ariaLabel}
      // containerClass="mr-3"
    />
  );
};

export default AladdinRadio;
