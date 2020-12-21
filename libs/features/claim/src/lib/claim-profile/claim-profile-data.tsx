import "./claim-profile.scss";
import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { AladdinTables } from "@aladdin/ui-kit";

export const ClaimProfileData: React.FC = (props) => {
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "KIT",
        field: "kit",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Kit",
        },
      },
      {
        label: "Type",
        field: "type",
        width: 270,
      },
      {
        label: "Code",
        field: "code",
        width: 200,
      },
      {
        label: "Active",
        field: "active",
        sort: "asc",
        width: 100,
      },
      {
        label: "Expires",
        field: "expires",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        kit: "Tiger Nixon",
        type: "System Architect",
        code: "Edinburgh",
        active: "61",
        expires: "2011/04/25",
      },
      {
        kit: "Garrett Winters",
        type: "Accountant",
        code: "Tokyo",
        active: "61",
        expires: "2011/04/25",
      },
      {
        kit: "Ashton Cox",
        type: "Junior Technical Author",
        code: "San Francisco",
        active: "61",
        expires: "2011/04/25",
      },
    ],
  });
  return (
    <AladdinTables
      responsive
      searching={false}
      autoWidth={true}
      borderless={true}
      classes=" my-3"
      color="primary"
      scroll={true}
      sortable={false}
      displayEntries={false}
      entriesOptions={[3, 5, 10]}
      pagesAmount={5}
      data={datatable}
    ></AladdinTables>
  );
};
