import './create-project.scss';
import React from 'react';

import { Controller } from 'react-hook-form';
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from '@aladdin/domain-models';
import { ICreateProjectForm } from '@aladdin/domain-models';
import { AladdinButton, AladdinDropdown, AladdinInput } from '@aladdin/ui-kit';
import { useModal, SharedModal } from '@aladdin/shared/modals';

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from 'mdbreact';
import { customUseForm } from '@aladdin/shared/forms';

/**** Things to do
 * POST request
 *
 *
 *
 *  ****/

export const CreateProject: React.FC = () => {
  const { onSubmit, control } = customUseForm<ICreateProjectForm>([]);
  const { showModal, toggleModal } = useModal();

  const createProjectModalContent = [
    {
      description:
        '1) The projects name should be a short title of the project.',
    },
    {
      description:
        '2) Add more detailed information to the project description such as unique qualitiites about your project that you would like for our team to know about.',
    },
    {
      description:
        '3) The project name, description, and reference tags can all besearched and filtered by using the search filedin the project dashboard.',
    },
  ];
  const renderCreateProjectMdalContent = createProjectModalContent.map(
    (content, index) => {
      return <p key={index}>{content.description}</p>;
    }
  );
  return (
    <>
      <div className="d-flex">
        <AladdinDropdown
          headerType="h1"
          currentlySelected="Create Project"
          selectorList={[
            {
              title: 'Zika Project',
              route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
            },
            {
              title: 'My Projects',
              route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/`,
            },
          ]}
        />
        <MDBIcon
          className="d-flex align-items-center"
          icon="info-circle"
          size="lg"
          onClick={toggleModal}
        />
      </div>

      <MDBTypography
        className="py-2 d-inline-block"
        note
        noteColor="warning"
        noteTitle="Note: "
      >
        You have not created any projects. Use the form below to create a
        project and upload data.
      </MDBTypography>
      <div className="project-form-container">
        <form className="needs-validation" onSubmit={onSubmit} noValidate>
          <div className="project-form py-1">
            <AladdinInput
              name="project-name"
              label="Name"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-name-input"
            />
            <AladdinInput
              name="project-tag"
              label="Tag"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-tag-input"
            />
          </div>
          <div className="project-form">
            <AladdinInput
              name="project-description"
              label="Description"
              type="textarea"
              control={control}
              classes="create-project-input"
              aria-label="project-description-input"
            />
            <AladdinInput
              name="project-type"
              label="Type"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-type-input"
            />
          </div>
          <div className="text-center my-3">
            <AladdinButton
              btnClicked={() => {
                console.log('test');
              }}
              classes="update-btn"
            >
              Submit
            </AladdinButton>
          </div>
        </form>
      </div>
      <SharedModal
        headerText="Tips to Create a Project"
        showModal={showModal}
        handleCloseModal={toggleModal}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="create-project-content">
                {renderCreateProjectMdalContent}
              </div>
            </MDBCol>
            <MDBCol className="security-image-col d-flex justify-content-center">
              Image for Modal
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </SharedModal>
    </>
  );
};

export default CreateProject;
