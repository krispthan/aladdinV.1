import "./sample-datasets.scss";
import React, { useState, useEffect } from "react";
import { FormValidation, ISampleNameForm } from "@aladdin/domain-models";
import {
  AladdinCard,
  AladdinDraggable,
  AladdinDroppable,
  AladdinInput,
} from "@aladdin/ui-kit";
import { MDBCol, MDBIcon, MDBInput, MDBRow } from "mdbreact";
import { Controller } from "react-hook-form";
import { customUseForm } from "@aladdin/shared/forms";
import { ItemTypes } from "@aladdin/domain-models";

/**Things to do:
 * api post sample name
 * handle download file to the card
 * Create handlers for each of the action buttons on the card
 *
 *
 */

/**** External Libraries used:
 * React DND
 */

interface IReads {
  name: string;
  date: string;
  actionBtns: string[];
}
const fakeData = [
  {
    name: "Name",
    R1: {
      id: 1,
      name: "Region Test 1",
      date: "12/2/2021",
      actionBtns: ["pen", "trash", "tag"],
    },
    R2: {
      id: 2,
      name: "Region Test 2",
      date: "12/2/2022",
      actionBtns: ["pen", "trash", "tag"],
    },
  },
  {
    name: "Name",
    R1: {
      id: 3,
      name: "Region Test 3",
      date: "12/2/203",
      actionBtns: ["pen", "trash", "tag"],
    },
    R2: {
      id: 4,
      name: "Region Test 4",
      date: "12/2/2024",
      actionBtns: ["pen", "trash", "tag"],
    },
  },
  {
    name: "Name",
    R1: {
      id: 5,
      name: "Region Test 5",
      date: "12/2/2025",
      actionBtns: ["pen", "trash", "tag"],
    },
    R2: {
      id: 6,
      name: "Region Test 6",
      date: "12/2/2026",
      actionBtns: ["pen", "trash", "tag"],
    },
  },
];
export const SampleDatasets: React.FC = () => {
  const { onSubmit, control, errors } = customUseForm<ISampleNameForm>([
    FormValidation.name,
  ]);
  const [arrangeSampleData, setArrangeSampleData] = useState(fakeData);

  /* HandleDragAndSwap() allows the user to drag/drop the sample and rerenders the data object when they drag/drop from one 
  sample to the next */

  const handleDragAndSwap = (item, monitor) => {
    let tempData = { ...arrangeSampleData };
    const dropResult = monitor.getDropResult();
    const dragId = item.id;
    const dropId = dropResult.id;
    const parseDragId = parseId(dragId);
    const parseDropId = parseId(dropId);

    const tempId = tempData[parseDragId.index][parseDragId.key];
    tempData[parseDragId.index][parseDragId.key] =
      tempData[parseDropId.index][parseDropId.key];
    tempData[parseDropId.index][parseDropId.key] = tempId;

    setArrangeSampleData(tempData);
  };

  const parseId = (id) => {
    const idArr = id.split("-");
    const keyArr = idArr[1];
    return {
      index: parseInt(idArr[0]),
      key: keyArr,
    };
  };

  const renderReadsDrag = (read: IReads, dragId: string) => {
    return (
      <AladdinDraggable end={handleDragAndSwap} data={read} id={dragId}>
        <div className={`dnd-item ${dragId} sample-set-handle`}>
          {read.name}
          {read.date}
          {read.actionBtns.map((btn, index) => {
            return <MDBIcon key={index} className="action-icons" icon={btn} />;
          })}
        </div>
      </AladdinDraggable>
    );
  };

  return (
    <AladdinCard classes="sample-dataset-card my-2" fullWidth>
      <form className="sample-name-form" onSubmit={onSubmit} noValidate>
        <div className="d-flex">
          <h4 className="mx-2 my-3">Sample Data Sets </h4>
          <AladdinInput
            outline
            classes="sample-name-input"
            name="name"
            label="Create Sample Name"
            type="text"
            control={control}
          />
          {errors.name && (
            <p className="error-text text-danger font-small">{`${errors.name.message}`}</p>
          )}
        </div>

        <div className="drag-n-drop">
          {fakeData.map((group, groupIndex) => {
            return (
              <MDBRow className="my-2" key={groupIndex}>
                <MDBCol xl="3" lg="5" size="6" className="dnd-groups">
                  <AladdinInput
                    classes="sample-name-input"
                    name="sample-name"
                    label="Sample Name"
                    type="text"
                    control={control}
                  />
                </MDBCol>
                <MDBCol xl="9" lg="7" size="6">
                  <AladdinDroppable
                    classes="dnd-group"
                    accept={ItemTypes.SampleDatasets}
                    id={groupIndex + "-R1"}
                  >
                    {renderReadsDrag(group.R1, `${groupIndex}-R1`)}
                  </AladdinDroppable>
                  <AladdinDroppable
                    classes="dnd-group"
                    accept={ItemTypes.SampleDatasets}
                    id={groupIndex + "-R2"}
                  >
                    {renderReadsDrag(group.R2, `${groupIndex}-R2`)}
                  </AladdinDroppable>
                </MDBCol>
              </MDBRow>
            );
          })}
        </div>
      </form>
    </AladdinCard>
  );
};

export default SampleDatasets;
