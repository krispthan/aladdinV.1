import React, { HTMLAttributes } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdbreact';
export interface CustomCardProps
  extends HTMLAttributes<HTMLDivElement>,
    AladdinCardWrapperProps,
    AladdinCardBaseProps {
  padding?: string;
  minimal?: boolean;
}
export interface AladdinCardWrapperProps {
  fullHeight?: boolean;
}
export interface AladdinCardBaseProps {
  fullWidth?: boolean;
  classes?: string;
  header?: string;
  title?: string;
  noContainer?: boolean;
}

const AladdinCardWrapper: React.FC<AladdinCardWrapperProps> = (props) => {
  return (
    <MDBRow
      className={`account-main-container ${props.fullHeight ? ' h-100' : ''}`}
    >
      <MDBCol className="full-height">{props.children}</MDBCol>
    </MDBRow>
  );
};
const AladdinCardBase: React.FC<AladdinCardBaseProps> = (props) => {
  return (
    <MDBCard
      className={` ${props.classes} ${props.fullWidth ? '' : 'd-inline-block'}`}
    >
      {props.header && <MDBCardHeader>{props.header}</MDBCardHeader>}
      <MDBCardBody>
        {props.title && <MDBCardTitle tag="h6">{props.title}</MDBCardTitle>}
        {!props.noContainer ? (
          <MDBContainer>{props.children}</MDBContainer>
        ) : (
          props.children
        )}
      </MDBCardBody>
    </MDBCard>
  );
};
const AladdinCardWithRow: React.FC<CustomCardProps> = (props) => {
  return (
    <AladdinCardWrapper {...(props as AladdinCardWrapperProps)}>
      <AladdinCardBase {...(props as AladdinCardBaseProps)} />
    </AladdinCardWrapper>
  );
};
export const AladdinCard: React.FC<CustomCardProps> = (props) => {
  return (
    <>
      {!!props.minimal ? (
        <AladdinCardBase {...props} />
      ) : (
        <AladdinCardWithRow {...(props as AladdinCardBaseProps)} />
      )}
    </>
  );
};

export default AladdinCard;
