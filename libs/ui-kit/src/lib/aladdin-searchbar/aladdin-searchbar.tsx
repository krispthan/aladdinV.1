import "./aladdin-searchbar.scss";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { MDBIcon } from "mdbreact";
import { customUseForm } from "@aladdin/shared/forms";

export interface AladdinSearchbarProps extends HTMLAttributes<HTMLElement> {
  dataList: any[];
  handleChange: (value: any[]) => any;
  onCompare: (value, search) => boolean;
  classes?: string;
}

/**Things to do
 * Need to implement searchbar across the app
 */

export const AladdinSearchbar: React.FC<AladdinSearchbarProps> = (
  props: AladdinSearchbarProps
) => {
  const handleKeypress = (searchValue: string) => {
    if (searchValue === "") {
      props.handleChange(props.dataList);
      return;
    }
    if (!!!searchValue) return;
    const filteredList = props.dataList.filter((data) => {
      return props.onCompare(data, searchValue);
    });
    props.handleChange(filteredList);
    return;
  };

  return (
    <form className="form-inline search-form d-">
      <div className="d-flex">
        <input
          className={`form-control form-control-sm ml-3 w-100 ${props.classes}`}
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleKeypress(e.currentTarget.value)}
        />
        <MDBIcon icon="search" alt="search-icon" />
      </div>
    </form>
  );
};

export default AladdinSearchbar;
