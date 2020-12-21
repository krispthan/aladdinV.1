import "./create-project.scss";
import React from "react";

import {
  AppRoute,
  FormValidation,
  ProjectRoutes,
  SequencerRoute,
} from "@aladdin/domain-models";
import { ICreateProjectForm } from "@aladdin/domain-models";
import { AladdinButton, AladdinDropdown, AladdinInput } from "@aladdin/ui-kit";
import { useModal, SharedModal } from "@aladdin/shared/modals";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdbreact";
import { customUseForm } from "@aladdin/shared/forms";

/**** Things to do
 * POST request
 *data type validation

 *
 *
 *  ****/

export const CreateProject: React.FC = () => {
  const { onSubmit, control, errors } = customUseForm<ICreateProjectForm>([
    FormValidation.name,
    FormValidation.description,
    FormValidation.dataType,
    FormValidation.tag,
  ]);
  const { showModal, toggleModal } = useModal();

  const createProjectModalContent = [
    {
      description:
        "1) The projects name should be a short title of the project.",
    },
    {
      description:
        "2) Add more detailed information to the project description such as unique qualitiites about your project that you would like for our team to know about.",
    },
    {
      description:
        "3) The project name, description, and reference tags can all besearched and filtered by using the search filedin the project dashboard.",
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
          name="drop-down-selector"
          control={control}
          headerType="h1"
          currentlySelected="Create Project"
          selectorList={[
            {
              title: "Zika Project",
              route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
            },
            {
              title: "My Projects",
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
        <form className="create-project-form py-1" onSubmit={onSubmit}>
          <div className="project-form">
            <AladdinInput
              name={FormValidation.name}
              label="Name"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-name-input"
            />
            <AladdinInput
              name={FormValidation.tag}
              label="Tag"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-tag-input"
            />
            {errors.name && (
              <span className="error-text text-danger font-small">{`${errors.name.message}`}</span>
            )}
            {errors.tag && (
              <span className="project-form error-text text-danger font-small">{`${errors.tag.message}`}</span>
            )}
          </div>

          <div className="project-form">
            <AladdinInput
              name={FormValidation.description}
              label="Description"
              type="textarea"
              control={control}
              classes="create-project-input"
              aria-label="project-description-input"
            />
            <AladdinInput
              name={FormValidation.dataType}
              label="Type"
              type="text"
              control={control}
              classes="create-project-input"
              aria-label="project-type-input"
            />
            {errors.dataType && (
              <span className="project-form error-text text-danger font-small">{`${errors.dataType.message}`}</span>
            )}
          </div>
          {errors.description && (
            <span className="error-text text-danger font-small">{`${errors.description.message}`}</span>
          )}
          <div className="text-center my-3">
            <AladdinButton type="submit" classes="update-btn">
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
