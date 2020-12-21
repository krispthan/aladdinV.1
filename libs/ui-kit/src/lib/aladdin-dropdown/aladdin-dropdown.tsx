import "./aladdin-dropdown.scss";
import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { AladdinHeader } from "../aladdin-header/aladdin-header";

/* Custom Dropdown component that is configurable to use to any component that needs Dropdown:
User can select project from drop down menuu
API: get request to grab all the projects to the top level componnent

*/

export interface IAladdinDropdownProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  currentlySelected?: string;
  headerType: string;
  selectorList: IDropdownProps[];
}

export interface IDropdownProps {
  title: string;
  route: string;
}

export const AladdinDropdown: React.FC<IAladdinDropdownProps> = (
  props: IAladdinDropdownProps
) => {
  return (
    <MDBDropdown className={`project-dropdown-menu ${props.classes}`}>
      <MDBDropdownToggle>
        <AladdinHeader headerType={props.headerType}>
          {props.currentlySelected}
          <MDBIcon className="mx-2" icon="chevron-down" />
        </AladdinHeader>
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {props.selectorList.map((selector, index) => {
          return (
            <MDBDropdownItem key={index}>
              <Link to={selector.route}>{selector.title}</Link>
            </MDBDropdownItem>
          );
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default AladdinDropdown;
