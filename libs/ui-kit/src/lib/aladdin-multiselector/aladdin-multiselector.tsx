import "./aladdin-multiselector.scss";
import React, { HTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";

export interface ISelector {
  label: string;
  value: string;
}
export interface IMultiSelectorProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  options: ISelector[];
  control: Control;
  defaultValue?: string;
  name: string;
}

export const AladdinMultiSelector: React.FC<IMultiSelectorProps> = (
  props: IMultiSelectorProps
) => {
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span
        style={{
          backgroundColor: "#EBECF0",
          borderRadius: "2em",
          color: "#172B4D",
          display: "inline-block",
          fontSize: 12,
          fontWeight: "normal",
          lineHeight: "1",
          minWidth: 1,
          padding: "0.16666666666667em 0.5em",
          textAlign: "center",
        }}
      >
        {data.options.length}
      </span>
    </div>
  );

  return (
    <>
      {/* <MDBSelect className="multiple-samples-selector">
        <MDBSelectInput selected="Choose Samples" />
        <MDBSelectOptions>
          {props.selectorList.map((selector, index) => {
            return (
              <div key={index} className="d-flex p-2">
                <MDBInput className="mx-2" type="checkbox" id="checkbox1" />
                <MDBSelectOption value="1">{selector.title}</MDBSelectOption>
              </div>
            );
          })}
        </MDBSelectOptions>
      </MDBSelect> */}
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={""}
        render={({ name, value, onChange }) => {
          return (
            <Select
              formatGroupLabel={formatGroupLabel}
              options={props.options}
              isMulti
              control
              name={name}
              onChange={onChange}
              value={value}
              containerClass="mb-0"
              size="sm"
            />
          );
        }}
      />
    </>
  );
};

export default AladdinMultiSelector;
