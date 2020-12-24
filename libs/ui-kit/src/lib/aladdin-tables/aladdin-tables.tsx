import "./aladdin-tables.scss";
import React, { HTMLAttributes } from "react";
import { MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

/* Will be able to use this table to inherit any sets of data*/
// export interface AladdinTablesProps extends HTMLAttributes<HTMLDivElement> {
//   classes?: string;
//   header?: string;
//   title?: string;
//   striped?: boolean;
//   autoWidth?: boolean;
//   scroll?: boolean;
//   checkbox?: boolean;
//   responsive?: boolean;
//   borderless?: boolean;
//   scrollY?: boolean;
//   headerList: string[];
//   bodyList: Keyed[];
// }
export interface Keyed extends Object {
  id: string;
}
// export interface ITableHeaderProps {
//   data: string | HTMLDivElement;
// }

export interface ITableBodyProps<T> {
  data: T[];
}

// const DEFAULT_HEADER_TABLE_COLOR = "#e6e1ef";

export interface IAladdinTableProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  responsive: boolean;
  scroll?: boolean;
  data: any;
  theadColor?: string;
  pagination?: boolean;
  pagesAmount?: number;
  autoWidth: boolean;
  borderless: boolean;
  striped?: boolean;
  searchLabel?: string;
  searching?: boolean;
  sortable?: boolean;
  filter?: string;
  displayEntries?: boolean;
  entriesLabel?: string;
  entries?: number;
  entriesOptions: number[];
}
export const AladdinTables: React.FC<IAladdinTableProps> = (
  props: IAladdinTableProps
) => {
  // const tableHeaderColor = props.color ?? DEFAULT_HEADER_TABLE_COLOR;
  // const tableResponsive = props.responsive ? "responsive" : "";
  return (
    <>
      {/* <MDBTable
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
      </MDBTable> */}
      <MDBDataTable
        hover
        scrollY
        entrieslabel={props.entriesLabel}
        striped={props.striped}
        sortable={props.sortable}
        displayEntries={props.displayEntries}
        searching={props.searching}
        entriesOptions={props.entriesOptions}
        entries={props.entries}
        pagesAmount={props.pagesAmount}
        data={props.data}
        searchTop
        searchBottom={false}
      />
    </>
  );
};

export default AladdinTables;
