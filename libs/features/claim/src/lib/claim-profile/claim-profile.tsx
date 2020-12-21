import './claim-profile.scss';
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import { Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ClaimProfileData } from './claim-profile-data';
import { AladdinCard } from '@aladdin/ui-kit';

/* Things to do:
- click handler for the rows and pagination 
-api calls to request current promo code data
-
 */
export interface ClaimProfileProps {
  activeItem: string;
  claimCode: string;
}

export const ClaimProfile: React.FC = () => {
  return (
    <AladdinCard className="claim-profile-card" fullWidth>
      <h2 className="text-left m-auto pt-3 pb-md-5 pb-lg-0">
        Current Promo Code
      </h2>
      <MDBRow>
        <MDBCol className="claim-profile-col align-self-center" xl="3" lg="6">
          <MDBCard className="claim-card">
            <MDBCardImage
              className="blue-gradient white-text d-flex justify-content-center align-items-center flex-column rounded "
              tag="div"
            >
              <h2>Promotion Code:</h2>
              <p>3454DGDE</p>
            </MDBCardImage>
            <MDBCardBody cascade className="text-center">
              <MDBCardText>
                <div>
                  <p className="py-2">Analysis and Comparison</p>
                  <p>16S</p>
                  <p>Data Allotment: 24.GB</p>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol
          xl="9"
          className="claim-data-table d-flex justify-content-end py-md-5 py-lg-0"
          lg="6"
        >
          <ClaimProfileData />
        </MDBCol>
      </MDBRow>
    </AladdinCard>
  );
};
