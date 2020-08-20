import React from "react";
import { StyleSelect, StyleOptionDisabled } from "./SelectInput.styles";
const SelectInput = ({ title, data, handleOnChange, name, value }) => {
  return (
    <StyleSelect
      value={value}
      data-tag={name}
      onChange={(e) => handleOnChange(e)}
      name={title}
      id={title}
    >
      <StyleOptionDisabled>{title}</StyleOptionDisabled>
      {data}
    </StyleSelect>
  );
};
export default SelectInput;
