import React, { HTMLAttributes } from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBBadge,
  MDBFormInline,
  MDBInput,
} from 'mdbreact';
import './aladdin-list.scss';

/* eslint-disable-next-line */
export interface IAladdinListProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  dataList: IDataList[];
}

export interface IDataList {
  name: string;
  date: string;
}

export const AladdinList: React.FC<IAladdinListProps> = (
  props: IAladdinListProps
) => {
  return (
    // <MDBScrollbar>
    <MDBListGroup>
      {props.dataList.map((data, index) => {
        return (
          <MDBListGroupItem
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <MDBFormInline>
              <MDBInput type="checkbox" id={data.name} containerClass="mr-5" />
            </MDBFormInline>
            {data.name} {data.date.toString()}
          </MDBListGroupItem>
        );
      })}
    </MDBListGroup>
    // </MDBScrollbar>
  );
};

export default AladdinList;
