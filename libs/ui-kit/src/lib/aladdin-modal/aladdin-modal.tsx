import React, { useState, HTMLAttributes } from 'react';
import { AladdinCard } from '../aladdin-card/aladdin-card';

import './aladdin-modal.scss';

/* eslint-disable-next-line */

export interface AladdinModalsProps extends HTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  headerText?: string;
  handleCloseModal: () => void;
}

export const AladdinModal: React.FC<AladdinModalsProps> = (
  props: AladdinModalsProps
) => {
  return (
    <div className={`backdrop ${props.showModal ? 'd-block' : 'd-none'}`}>
      <AladdinCard minimal classes="modal-card" header={props.headerText}>
        {/* <div className="closing-btn-container text-right"> */}
        <div className="closing-btn" onClick={props.handleCloseModal}>
          X
        </div>
        {/* </div> */}
        {props.children}
      </AladdinCard>
    </div>
  );
};

export default AladdinModal;
