import React from 'react';
import { AppRoute, ReportRoutes, SequencerRoute } from '@aladdin/domain-models';
import { Route, Link } from 'react-router-dom';

import './data-samples.scss';
import { AladdinTables } from '@aladdin/ui-kit';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';

/* eslint-disable-next-line */

export const DataSamples: React.FC = () => {
  return (
    <MDBCard>
      <MDBCardHeader
        tag="h3"
        className="text-center font-weight-bold text-uppercase py-4"
      >
        Data Samples
      </MDBCardHeader>
      <MDBCardBody>
        <MDBContainer>
          <AladdinTables
            classes="my-3"
            color="primary"
            striped
            borderless
            headerList={[
              {
                data: 'Sequence Name',
              },
              { data: 'Sequencing Set' },
              { data: 'Date' },
            ]}
            bodyList={[
              { data: 'Sars' },
              { data: 'Test_One' },
              { data: '12-2-20' },
            ]}
          ></AladdinTables>
        </MDBContainer>
      </MDBCardBody>
    </MDBCard>
  );
};

export default DataSamples;
