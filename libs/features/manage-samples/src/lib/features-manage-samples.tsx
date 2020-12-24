import "./features-manage-samples.scss";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdbreact";
import React from "react";
import {
  AladdinCard,
  AladdinSearchbar,
  AladdinFilter,
  AladdinDraggable,
  AladdinDroppable,
  AladdinMultiSelector,
  AladdinButton,
} from "@aladdin/ui-kit";
import { SampleDatasets } from "@aladdin/features/upload-data";
import { useModal, SharedModal } from "@aladdin/shared/modals";
import { customUseForm } from "@aladdin/shared/forms";
import { IManageSampleMulSelector } from "@aladdin/domain-models";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

/**** Things to do:
 GET REQUEST GRAB EXISTING DATA
 REDUX DELETE DATA FROM LIST 
 REDUX HANDLE FILTER TO SYNCHRONIZE WITH LIST
 * ****/

/**** External Libraries used:
 * React Draggable
 * ****/

export const FeaturesManageSamples: React.FC = () => {
  const { onSubmit, control } = customUseForm<IManageSampleMulSelector>([]);

  const { showModal, toggleModal } = useModal();
  const fakeDataFromServer = [
    {
      name: "Region Test 1",
      date: "10-2020",
      icon: "fa-grip-vertical",
      actionableBtn: ["trash", "pen", "tag"],
    },
    {
      name: "Region Test 1",
      date: "10-2020",
      icon: "fa-grip-vertical",
      actionableBtn: ["trash", "pen", "tag"],
    },
  ];
  const options = [
    { value: "sample_One", label: "sample_One" },
    { value: "sample_Two", label: "sample_Two" },
    { value: "sample_Three", label: "sample_Three" },
  ];
  const manageDataModalContent = [
    {
      description:
        "Step 1: Once data are uploaded, the data will be displayed on the sample table. There are action buttons which allows you to view and edit your each of your sample.",
    },
    {
      description:
        "Step 2: New samples can also be created by uploading your data and combining FASTQ sets for deeper sequencing and deleted.",
    },

    {
      description:
        "Note: Data that has invalid platform will have a red FASTQ ID",
    },
  ];
  const renderManageDataModalContent = manageDataModalContent.map(
    (content, index) => {
      return (
        <div key={index}>
          <li>{content.description}</li>
          <br />
        </div>
      );
    }
  );
  const handleDrag = (item, monitor) => {
    const dropResult = monitor.getDropResult();
    //Logic to handle drag
    console.log("I was dropped");
  };
  return (
    <div className="manage-data-container">
      <div className="manage-data-header-container d-flex">
        <div className="d-flex">
          <h1 className="h1-responsive">Manage Data</h1>
          <MDBIcon
            className="d-flex align-items-center mx-2"
            icon="info-circle"
            size="lg"
            onClick={toggleModal}
          />
        </div>
        <div className="global-search-container">
          <AladdinSearchbar />
        </div>
      </div>
      {/* Dynamically generate below, if the user doesnt have any data, show the
      data */}
      <MDBTypography
        className="py-2 d-inline-block"
        note
        noteColor="warning"
        noteTitle="Note primary: "
      >
        Looks like you need to select the uploaded samples and manage before
        moving forward.
      </MDBTypography>
      <p>Select the corresponding project to begin uploading your samples.</p>
      <div className="data-container">
        <MDBRow>
          <MDBCol xl="4" md="5" size="6" className="exisiting-data-col">
            <p>
              <strong>Filter your data sets</strong>
            </p>
            <AladdinFilter
              classes="manage-data-filter my-3"
              filterList={[
                {
                  label: "Data",
                  value: true,
                },
                {
                  label: "Date",
                  value: false,
                },
                {
                  label: "Name",
                  value: false,
                },
              ]}
            ></AladdinFilter>
          </MDBCol>
          <MDBCol xl="8" md="7" size="6">
            <p>Select Samples to Manage</p>
            <form onSubmit={onSubmit}>
              <div className="manage-sample-header d-flex">
                <AladdinMultiSelector
                  name="multi-sample-selectors"
                  options={options}
                  control={control}
                />
                {/* <AladdinButton>Deleted Samples</AladdinButton> */}
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xl="4" md="5" size="6" className="exisiting-data-col">
            <AladdinCard classes="existing-data-card mb-4" fullWidth>
              <p>Existing Data</p>
              {/* This is where the files will be filtered and render coming from backend */}
              <AladdinDraggable end={handleDrag}>
                {fakeDataFromServer.map((data, index) => {
                  return (
                    <div key={index} className="d-flex mt-2">
                      <div
                        className="accepted-files handle-drag"
                        id={data.name}
                      >
                        <MDBIcon icon={data.icon} />
                        {data.name} {data.date.toString()}
                        {data.actionableBtn.map((icon, index) => {
                          return (
                            <MDBIcon
                              className="actionable-btns mx-1"
                              key={index}
                              icon={icon}
                            />
                          );
                        })}
                      </div>
                      <div className="m-2 close-files">X</div>
                    </div>
                  );
                })}
              </AladdinDraggable>
            </AladdinCard>
          </MDBCol>

          <MDBCol xl="8" md="7" size="6">
            {/* These sample sets have to be dynamic base on what the user chooses from multi-selector */}
            <SampleDatasets />
            {/* <SampleDatasets />
            <SampleDatasets /> */}
          </MDBCol>
        </MDBRow>
      </div>
      <SharedModal
        headerText="Tips to Manage Your Data"
        showModal={showModal}
        handleCloseModal={toggleModal}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="manage-data-content">
                <ul>{renderManageDataModalContent}</ul>
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

export default FeaturesManageSamples;
