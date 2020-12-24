import "./features-upload-data.scss";
import React, { useState } from "react";
import {
  AladdinSearchbar,
  AladdinDropdown,
  AladdinFiledropZone,
  AladdinButton,
} from "@aladdin/ui-kit";
import { useModal, SharedModal } from "@aladdin/shared/modals";
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from "@aladdin/domain-models";
import { MDBTypography, MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

import { SequenceReadType } from "@aladdin/domain-models";
import SampleDatasets from "./sample-datasets/sample-datasets";
import { Controller, useForm } from "react-hook-form";
import { FormValidation, IRadioReads } from "@aladdin/domain-models";
import { customUseForm } from "@aladdin/shared/forms";

/* Need to hook up search bar when running a get request  */
export const FeaturesUploadData: React.FC = (): JSX.Element => {
  const { onSubmit, control, register } = customUseForm<IRadioReads>();

  const { showModal, toggleModal } = useModal();
  const [checkedRadio, setCheckedRadio] = useState<
    Record<SequenceReadType, boolean>
  >({
    [SequenceReadType.singleEnd]: true,
    [SequenceReadType.pairedEnd]: false,
  });

  /* Will need to refactor this and put it inside a customize Radio  */

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
  const uploadDataModalContent = [
    {
      description:
        "Step 1: Select a project you wish to begin to upload your data.",
    },
    { description: "Step 2: Begin uploading your data." },
    {
      description:
        "Step 3: Once your samples are uploaded, select the data you wish to modified (e.g.,name, meta tags).",
    },
    {
      description:
        "Step 4: Click into the specific samples to either archive, edit meta data, delete or add existing data to samples.",
    },
  ];
  const renderUploadModalContent = uploadDataModalContent.map(
    (content, index) => {
      return <p key={index}>{content.description}</p>;
    }
  );
  return (
    <div className="upload-wrapper">
      <div className="upload-data-header-container d-flex">
        {/* <div className="d-flex"> */}
        <h1 className="h1-responsive">Upload Data</h1>
        <MDBIcon
          className="d-flex align-items-center mx-2"
          icon="info-circle"
          size="lg"
          onClick={toggleModal}
        />
        {/* </div> */}
        <div className="global-search-container">
          <AladdinSearchbar />
        </div>
      </div>
      {/* Dynamically generate below, if the user doesnt have any data, show the
      data */}
      <MDBTypography
        className="py-2"
        note
        noteColor="warning"
        noteTitle="Note primary: "
      >
        Looks like you have not uploaded any samples. Please choose the project
        you wish to begin uploading your samples to.
      </MDBTypography>
      <p>Select the corresponding project to begin uploading your samples.</p>

      <MDBRow>
        <MDBCol xl="4">
          <form onSubmit={onSubmit}>
            <AladdinDropdown
              name="drop-down-selector"
              control={control}
              headerType="h2"
              currentlySelected="My Projects"
              classes="dropdown-header"
              selectorList={[
                {
                  title: "Zika Project",
                  route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
                },
                {
                  title: "Sample Project",
                  route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`,
                },
                {
                  title: "My Projects",
                  route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}/`,
                },
              ]}
            />
          </form>
          <div className="check-reads-container">
            <p>
              <strong>Are your reads:</strong>
            </p>
          </div>
          <form className="ml-5" method="post" onSubmit={onSubmit}>
            <input
              className="radio"
              onChange={() => handleCheckedReads(SequenceReadType.singleEnd)}
              checked={checkedRadio.singleEnd}
              type="radio"
              id="single-end"
              aria-label="single-read-option"
              ref={register}
              name="single-end"
            />
            <label className="radio-label">Single Read</label>
            <input
              onChange={() => handleCheckedReads(SequenceReadType.pairedEnd)}
              checked={checkedRadio.pairedEnd}
              type="radio"
              id="paired-end"
              aria-label="paired-read-option"
              ref={register}
              name="paired-end"
            />
            <label className="radio-label">Pair Reads</label>

            <AladdinButton type="submit">Submit</AladdinButton>
          </form>
          <AladdinFiledropZone />
        </MDBCol>
        <MDBCol xl="8">
          <SampleDatasets />
          <div className="sample-data-btn-container d-flex my-3">
            <AladdinButton
              btnClicked={() => {
                console.log("test");
              }}
              className="sample-data-btn"
            >
              Save
            </AladdinButton>
          </div>
        </MDBCol>
      </MDBRow>
      <SharedModal
        headerText="Tips to Upload Data"
        showModal={showModal}
        handleCloseModal={toggleModal}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="upload-data-content">
                {renderUploadModalContent}
              </div>
            </MDBCol>
            <MDBCol className="security-image-col d-flex justify-content-center">
              Image for Modal
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </SharedModal>
    </div>
  );
};

export default FeaturesUploadData;
