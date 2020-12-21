import React, {
  useState,
  HTMLAttributes,
  useEffect,
  useRef,
  ReactNode,
} from 'react';
import { AladdinCard } from '@aladdin/ui-kit';
import { createPortal } from 'react-dom';
import './shared-modal.scss';

/* Creata a custom modal hook using portal to have modal render only once.*/

export interface SharedModalsProps extends HTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  headerText?: string;
  handleCloseModal: () => void;
  children: ReactNode;
}

const modalRootId = 'modal';

export const SharedModal: React.FC<SharedModalsProps> = (
  props: SharedModalsProps
) => {
  // const el = useRef(
  //   document.getElementById(modalRootId) || document.createElement('div')
  // );

  const [container] = useState(() => {
    const el = document.createElement('div');
    if (props.className) el.classList.add(props.className);
    return el;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const BaseModal = () => {
    return (
      <div className={`backdrop ${props.showModal ? 'd-block' : 'd-none'}`}>
        <AladdinCard minimal classes="modal-card" header={props.headerText}>
          <div className="closing-btn" onClick={props.handleCloseModal}>
            X
          </div>
          {props.children}
        </AladdinCard>
      </div>
    );
  };

  return createPortal(<BaseModal />, container);
};
