import './data-samples-comparison.scss';
import React from 'react';
import { AladdinTables } from '@aladdin/ui-kit';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';

/* Things to do
GET API Request for Data on Analysis
*/

export function DataSamplesComparison() {
  return (
    <MDBCard>
      <MDBCardHeader
        tag="h3"
        className="text-center font-weight-bold text-uppercase py-4"
      >
        Data Samples With Comparisons
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
              { data: 'DESeq2 results (Excel)' },
              { data: 'Scatter Plots' },
              { data: 'MA Plots ' },
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
}

export default DataSamplesComparison;
