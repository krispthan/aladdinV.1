import './view-project.scss';
import React from 'react';
import {
  AladdinButton,
  AladdinCard,
  AladdinDropdown,
  AladdinTables,
} from '@aladdin/ui-kit';
import { Link } from 'react-router-dom';
import {
  AppRoute,
  SequencerRoute,
  ProjectRoutes,
} from '@aladdin/domain-models';
import {
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdbreact';
/* Things to do:
add props handle click:
- user clicks on the project should take them to the specific project using routes

api get request to retrieve project id information
*/

export const ViewProject: React.FC = (props) => {
  const data_people = {
    columns: [
      {
        label: 'Sample Name',
        field: 'sample',
        sort: 'asc',
      },

      {
        label: 'Type PE/SE',
        field: 'type',
        sort: 'asc',
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
      },
      {
        label: 'Region',
        field: 'region',
        sort: 'asc',
      },
    ],
    rows: [
      {
        id: 'Control_R_1',
        type: 'Kate',
        description: 'USA',
        region: 'New York City',
      },
      {
        id: 'Control_R_2',
        type: 'Kate',
        description: 'USA',
        region: 'New York City',
      },
    ],
  };
  return (
    <>
      <MDBRow className="project-header-container d-flex">
        <MDBCol xl="9" lg="9" md="6" className="pb-3">
          <AladdinDropdown
            currentlySelected="Zika Project"
            classes="dropdown-header"
            selectorList={[
              {
                title: 'Zika Project',
                route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
              },
              {
                title: 'Sample Project',
                route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
              },
              {
                title: 'My Projects',
                route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/`,
              },
            ]}
          />
          <p>
            This is a descript of the Zika project. Here you'll find details to
            your project.
          </p>
        </MDBCol>
        <MDBCol
          xl="3"
          lg="3"
          md="6"
          className="project-side-description-container mt-5"
        >
          <p>Project Created: 10/7/2020</p>
          <p>
            <span>Status: </span>
            <strong>Open</strong>
          </p>
          <p>Data Type: 16 S</p>
        </MDBCol>
      </MDBRow>
      <AladdinCard classes="project-card-table my-4">
        <h3>Samples Uploaded</h3>
        {/* {Need to dynamically check if there are any data, if not display text} */}
        {/* <p>There are no samples uploaded. Begin uploading your samples.</p> */}
        <div className="d-flex">
          <p>Your samples are displayed below for this project.</p>
          <AladdinButton
            btnClicked={() => {
              console.log('test');
            }}
            classes="sample-table-create-btn mx-3"
          >
            <Link to={`/${AppRoute.sequencer}/${SequencerRoute.uploadData}`}>
              Upload Data
            </Link>
          </AladdinButton>
        </div>
        <AladdinTables
          classes=" my-3"
          color="primary"
          striped
          borderless
          headerList={[
            { data: 'Sample Name' },
            { data: 'Sequencing Set' },
            { data: 'Date' },
          ]}
          bodyList={[
            { data: 'Sars' },
            { data: 'Test_One' },
            { data: '12-2-20' },
          ]}
        ></AladdinTables>
      </AladdinCard>
      <AladdinCard classes="project-card-table">
        <h3>Analysis</h3>
        {/* {Need to dynamically check if there are any data, if not display text} */}

        {/* <p>There are no analysis. Begin loading samples to run an analysis.</p> */}
        <div className="d-flex">
          <p>Your analysis are displayed below for this project.</p>

          <AladdinButton
            btnClicked={() => {
              console.log('test');
            }}
            classes="sample-table-create-btn mx-3"
          >
            <Link to={`/${AppRoute.sequencer}/${SequencerRoute.analysis}`}>
              Run Analysis
            </Link>
          </AladdinButton>
        </div>

        <AladdinTables
          classes=" my-3"
          color="primary"
          striped
          borderless
          headerList={[
            { data: 'Sample Name' },
            { data: 'Sequencing Set' },
            { data: 'Date' },
          ]}
          bodyList={[
            { data: 'Sars' },
            { data: 'Test_One' },
            { data: '12-2-20' },
          ]}
        ></AladdinTables>
      </AladdinCard>
    </>
  );
};

export default ViewProject;
