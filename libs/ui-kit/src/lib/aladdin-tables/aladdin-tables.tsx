import "./aladdin-tables.scss";
import React, { HTMLAttributes } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

/* Will be able to use this table to inherit any sets of data*/
export interface AladdinTablesProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  header?: string;
  title?: string;
  striped?: boolean;
  autoWidth?: boolean;
  scroll?: boolean;
  checkbox?: boolean;
  responsive?: boolean;
  borderless?: boolean;
  scrollY?: boolean;
  headerList: string[];
  bodyList: Keyed[];
}
export interface Keyed extends Object {
  id: string;
}
export interface ITableHeaderProps {
  data: string | HTMLDivElement;
}

export interface ITableBodyProps<T extends Keyed> {
  data: T[];
}
const DEFAULT_HEADER_TABLE_COLOR = "#e6e1ef";
export const AladdinTables: React.FC<AladdinTablesProps> = (
  props: AladdinTablesProps
) => {
  const tableHeaderColor = props.color ?? DEFAULT_HEADER_TABLE_COLOR;
  const tableResponsive = props.responsive ? "responsive" : "";
  return (
    <>
      <MDBTable
        className={`aladdin-table ${props.classes} ${props.striped} ${props.scrollY} ${tableResponsive} ${props.borderless} ${tableHeaderColor} `}
        hover
      >
        <MDBTableHead>
          <tr>
            {props.headerList.map((tr, index) => {
              return <th key={index}>{tr}</th>;
            })}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {props.bodyList.map((tableRow, index) => {
            return (
              <tr key={index} className="handle-drag">
                {Object.keys(tableRow).map((tableData, index) => {
                  return (
                    tableData != "id" && (
                      <td key={index}>{tableRow[tableData]}</td>
                    )
                  );
                })}
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default AladdinTables;
