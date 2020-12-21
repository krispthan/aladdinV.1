import "./features-analysis.scss";
import React, { useState } from "react";
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from "@aladdin/domain-models";
import {
  AladdinButton,
  AladdinCard,
  AladdinDropdown,
  AladdinSearchbar,
  AladdinFilter,
  AladdinTables,
  AladdinDraggable,
  AladdinDroppable,
} from "@aladdin/ui-kit";
import { useModal, SharedModal } from "@aladdin/shared/modals";
import { customUseForm } from "@aladdin/shared/forms";
import { IControlGroupFormData } from "@aladdin/domain-models";
import {
  MDBBtn,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdbreact";
import { useForm } from "react-hook-form";
import { IDropdownSelector } from "@aladdin/domain-models";

/* Things to do:
handle post request to grab sample data
handleAddSample ()
removeSample()
handleCheckBox()
inputform submit()
handleCreateNewAnalysis()
*/
interface ISampleSet {
  id: string;
  name: string;
  date: string;
  sequenceSet: string;
}
const fakeData = {
  header: ["Sequence Name", "Sequence Set", "Date", "Stuff"],
  body: [
    {
      id: "1",
      name: "Sars",
      sequenceSet: "Test_One",
      date: "12-22-22",
      anything: "anything",
    },
    {
      id: "2",
      name: "Covid",
      sequenceSet: "Test_Two",
      date: "12-21-22",
      something: "something",
    },
  ],
};

export const FeaturesAnalysis = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { onSubmit, control } = customUseForm<IDropdownSelector>([]);
  const [isToggle, setToggle] = useState<boolean>(false);
  const { showModal, toggleModal } = useModal();
  const [tableCheckBox, setTableCheckBox] = useState<string>("");

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const tipsOnAnalysisModalContent = [
    { description: "Choose which project you want to run the analysis from." },
    { description: "Select an analysis or create a new analysis to begin." },
    {
      description:
        "Choose and filter which sequenceset and samples you want to add or emove to in your analysis table.",
    },
    {
      description:
        "Assign group name to the samples you wish to compare and analyzed. Samples that are not group will not be compared, only analyzed.",
    },
    {
      description:
        "Once the sequence sets and samples are selected to be analyzed, click run analysis.",
    },
    {
      description:
        "Click 'View Analysis' to see an illustration of your report.",
    },
  ];

  const renderTipsOnAnalysisModalContent = tipsOnAnalysisModalContent.map(
    (content, index) => {
      return <p key={index}>{content.description}</p>;
    }
  );

  const renderAnalysisTable = (sampleSets?: ISampleSet[], dragId?: string) => {
    return (
      // <AladdinDraggable end={handleDragDrop} data={sampleSets} id={dragId}>
      <AladdinTables
        classes=" my-3"
        color="primary"
        striped
        borderless
        headerList={fakeData.header}
        bodyList={fakeData.body}
      ></AladdinTables>
      // </AladdinDraggable>
    );
  };
  const handleDragDrop = () => {
    //Logic, each row of the table can be drag and drop
  };
  return (
    <div className="analysis-wrapper">
      <div className="analysis-container d-flex">
        <div className="d-inline-block">
          <AladdinSearchbar />
        </div>
        <div className="d-flex">
          <h1 className="h1-responsive">Run Analysis</h1>
          <MDBIcon
            className="d-flex align-items-center mx-2"
            icon="info-circle"
            size="lg"
            onClick={toggleModal}
          />
        </div>
      </div>
      {/* Dynamically generate below, if the user doesnt have any data, show the
    data */}
      <MDBTypography
        className="py-2 d-inline-block"
        note
        noteColor="warning"
        noteTitle="Note:"
      >
        There are no samples uploaded to add to your analysis.
      </MDBTypography>
      <p>
        Select the sample you would like to include in your analysis. Please
        group the samples in the analysis before submitting.
      </p>

      <form onSubmit={onSubmit}>
        <AladdinDropdown
          name="drop-down-selector"
          control={control}
          headerType="h3"
          currentlySelected="My Projects"
          classes="view-projects dropdown-header"
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
      <MDBRow>
        <MDBCol>
          <div className="create-analysis-container d-flex">
            <MDBIcon className="mr-2" icon="plus-circle" size="lg" />
            <p className="position-relative">Create New Analysis</p>
            {/* <AladdinDropdown
              currentlySelected="My Analysis"
              classes="dropdown-header"
              selectorList={[
                {
                  title: 'Choose Analysis',
                  route: `/${AppRoute.sequencer}/${SequencerRoute.projects}/${ProjectRoutes.view}`,
                },
              ]}
            /> */}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <AladdinCard noContainer fullWidth classes="analysis-card">
            <MDBRow>
              <MDBCol>
                <div className="sample-side">
                  <h3 className="d-inline-block mx-3">
                    <strong>Samples</strong>
                  </h3>
                  <MDBIcon
                    className="filter-btn"
                    onClick={handleToggle}
                    icon="filter"
                  />
                  <MDBCollapse isOpen={isToggle}>
                    <AladdinFilter
                      classes="d-flex my-4"
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
                    />
                  </MDBCollapse>{" "}
                </div>

                {renderAnalysisTable()}
              </MDBCol>
              <div className="vertical-line"></div>
              <MDBCol>
                <h3 className="d-inline-block mx-3">
                  <strong>Analysis</strong>
                </h3>

                {/* <AladdinDraggable id="drag-id">
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
                </AladdinDraggable> */}
                <form className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    // onChange={(val) => handleOnChange(val)}
                    ref={register({ required: false })}
                    className="form-control"
                    placeholder="Control Group"
                    aria-label="Control Group"
                  />
                  <div className="input-group-append">
                    <MDBBtn
                      className="control-group-btn btn btn-outline-secondary"
                      rounded
                      type="button"
                    >
                      Save
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </AladdinCard>
          <div className="run-analysis-container d-flex my-3">
            <AladdinButton classes="mx-3 analysis-btn">
              Run Analysis
            </AladdinButton>
            <AladdinButton classes="analysis-btn">Run Analysis</AladdinButton>
          </div>
        </MDBCol>
      </MDBRow>
      <SharedModal
        headerText="Tips to Run Analysis"
        showModal={showModal}
        handleCloseModal={toggleModal}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="create-project-content">
                <ul>{renderTipsOnAnalysisModalContent}</ul>
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

export default FeaturesAnalysis;
