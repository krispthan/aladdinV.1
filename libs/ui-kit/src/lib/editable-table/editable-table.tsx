import React from "react";
import "./editable-table.scss";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTableEditable,
} from "mdbreact";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "<button>Test</button>", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"],
];

/* eslint-disable-next-line */
export interface EditableTableProps {}

export function EditableTable(props: EditableTableProps) {
  return (
    <MDBCard>
      <MDBCardHeader
        tag="h3"
        className="text-center font-weight-bold text-uppercase py-4"
      >
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable
          data={data}
          columns={columns}
          striped
          bordered
          getValue={(value) => console.log("GET VALUE", value)}
          onChange={(value) => console.log("ON CHANGE", value)}
        />
      </MDBCardBody>
    </MDBCard>
  );
}

export default EditableTable;
