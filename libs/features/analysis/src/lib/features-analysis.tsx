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
// const fakeData = {
//   header: ["Sequence Name", "Sequence Set", "Date", "Stuff"],
//   body: [
//     {
//       id: "1",
//       name: "Sars",
//       sequenceSet: "Test_One",
//       date: "12-22-22",
//       anything: "anything",
//     },
//     {
//       id: "2",
//       name: "Covid",
//       sequenceSet: "Test_Two",
//       date: "12-21-22",
//       something: "something",
//     },
//   ],
// };

export const FeaturesAnalysis = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { onSubmit, control } = customUseForm<IDropdownSelector>([]);
  const [isToggle, setToggle] = useState<boolean>(false);
  const { showModal, toggleModal } = useModal();
  const [tableCheckBox, setTableCheckBox] = useState<string>("");
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Position",
        field: "position",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        salary: "$342",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        date: "2008/10/16",
        salary: "$470",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        date: "2012/12/18",
        salary: "$313",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        date: "2010/03/17",
        salary: "$385",
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: "66",
        date: "2012/11/27",
        salary: "$198",
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: "64",
        date: "2010/06/09",
        salary: "$725",
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: "59",
        date: "2009/04/10",
        salary: "$237",
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        date: "2012/10/13",
        salary: "$132",
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        salary: "$217",
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: "30",
        date: "2011/09/03",
        salary: "$345",
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: "40",
        date: "2009/06/25",
        salary: "$675",
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: "21",
        date: "2011/12/12",
        salary: "$106",
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sidney",
        age: "23",
        date: "2010/09/20",
        salary: "$85",
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: "47",
        date: "2009/10/09",
        salary: "$1",
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        salary: "$92",
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
      },
    ],
  });
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
      <AladdinDraggable end={handleDragDrop} data={sampleSets} id={dragId}>
        <AladdinTables
          responsive
          autoWidth={true}
          borderless={true}
          classes=" my-3"
          color="primary"
          scroll={true}
          entries={10}
          entriesOptions={[3, 5, 10]}
          searchLabel={"Search"}
          filter={"Sample Name"}
          pagesAmount={5}
          data={datatable}
        ></AladdinTables>
      </AladdinDraggable>
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
                </div>

                {renderAnalysisTable()}
              </MDBCol>
              <div className="vertical-line"></div>
              <MDBCol>
                <h3 className="d-inline-block mx-3">
                  <strong>Analysis</strong>
                </h3>

                {renderAnalysisTable()}
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
