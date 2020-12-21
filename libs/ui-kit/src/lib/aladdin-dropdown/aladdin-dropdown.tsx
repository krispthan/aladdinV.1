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
import { Control, Controller } from "react-hook-form";

export interface ISelector {
  label: string;
  value: string;
}
export interface IAladdinDropdownProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  currentlySelected?: string;
  headerType: string;
  selectorList: IDropdownProps[];
  name: string;
  control: Control;
  onClick?: () => void;
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
            <Controller
              key={index}
              name={props.name}
              control={props.control}
              defaultValue={""}
              render={({ name, value, onChange }) => {
                return (
                  <MDBDropdownItem
                    name={name}
                    value={value}
                    onChange={onChange}
                    key={index}
                  >
                    <Link to={selector.route}>{selector.title}</Link>
                  </MDBDropdownItem>
                );
              }}
            />
          );
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default AladdinDropdown;
